import BaseHttpClient from '@rengar-admin/axios'
import axios from 'axios'
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { useRouterHook } from '@/hooks/router'
import { useAuthStore, useLanguageStore } from '@/stores'
import router from '@/router'
import { getServiceBaseUrl } from '@/utils/service'
import { md5 } from 'js-md5'
import { Encrypt } from '@/utils/secret'

// 扩展请求配置类型
interface CustomRequestHeaders {
  noSecret?: boolean
  noToken?: boolean
  locale?: string
  token?: string
  randomKey?: number
  sign?: string
  secure?: boolean
  [key: string]: any
}

const QUERY_URL_KEYWORDS = ['list', 'List', 'tree', 'query', 'select'] as const // 不去重的请求url关键字
const DEFAULT_UNAUTHORIZED_MESSAGE = '未授权，请重新登录' // 未登录msg
const DEFAULT_ERROR_MESSAGE = '请求失败' // 默认msg
const REQUEST_TIMEOUT = 1000 * 600 // 超时时间

/**
 * 显示错误消息
 */
function showErrorMessage(message: string) {
  window.$message?.error?.(message)
}

/**
 * 存储未完成的请求
 * key: 请求唯一标识, value: AbortController
 */
const pendingRequests = new Map<string, AbortController>()

/**
 * 判断是否为查询类请求（列表、树形、查询等）
 * 查询类请求允许重复，不需要去重
 */
function isQueryRequest(url: string): boolean {
  if (!url) return false
  const lowerUrl = url.toLowerCase()
  return QUERY_URL_KEYWORDS.some((keyword) => lowerUrl.includes(keyword.toLowerCase()))
}

/**
 * 生成请求唯一标识（method + url + 参数序列化）
 */
function generateRequestKey(config: AxiosRequestConfig): string {
  const { method, url, params, data } = config
  // 序列化params（GET参数）和data（POST请求体），避免参数顺序不同导致标识不一致
  const paramsStr = params ? JSON.stringify(params) : ''
  const dataStr = data && typeof data === 'object' ? JSON.stringify(data) : ''
  // 拼接生成唯一key
  return [method?.toUpperCase(), url, paramsStr, dataStr].join('_')
}

/**
 * 清理请求控制器
 */
function cleanupRequest(config: AxiosRequestConfig | undefined) {
  if (config) {
    const requestKey = generateRequestKey(config)
    pendingRequests.delete(requestKey)
  }
}

class HttpClient extends BaseHttpClient {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  protected initializeRequestInterceptor(): number {
    return this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const url = config.url || ''

        // 生成当前请求的唯一标识
        const requestKey = generateRequestKey(config)

        // 查询类请求允许重复，不需要去重；其他请求需要去重
        if (!isQueryRequest(url)) {
          // 若存在重复未完成请求，先取消旧请求
          const oldController = pendingRequests.get(requestKey)
          if (oldController) {
            oldController.abort(`取消重复请求：${url}`)
            pendingRequests.delete(requestKey)
          }
        }

        // 创建新的AbortController实例
        const controller = new AbortController()
        // 将controller.signal赋值给config，用于axios关联取消操作
        config.signal = controller.signal

        // 存储新请求的控制器
        pendingRequests.set(requestKey, controller)

        // 获取用户信息和语言设置
        const { user } = useAuthStore()
        const { currentLanguage } = useLanguageStore()

        // 获取自定义 headers 属性（使用类型断言以支持自定义属性）
        const headers = (config.headers || {}) as any as CustomRequestHeaders
        const { noSecret, noToken } = headers

        // 设置请求头
        if (!config.headers) {
          config.headers = {} as any
        }
        const customHeaders = config.headers as any
        customHeaders.locale = currentLanguage

        // 设置认证信息
        if (!noToken && user?.token) {
          customHeaders.token = user.token
          const randomKey = Date.now()
          customHeaders.randomKey = randomKey
          customHeaders.sign = md5(`${randomKey}${user.loginName}`)
        }

        // 请求参数默认加密（仅POST请求）
        if (!noSecret && config.method === 'post' && config.data) {
          const dataStr = JSON.stringify(config.data)
          customHeaders.secure = true
          config.data = {
            detail: Encrypt(dataStr, user?.longitude || '', user?.latitude || ''),
          }
        }

        // 记录发起请求时的路由路径
        config.meta = config.meta || {}
        config.meta.routerFullPath = router.currentRoute.value.fullPath

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  /**
   * 处理未授权错误
   * @param message 错误消息
   * @param path 跳转路径
   */
  private handleUnauthorized(message: string = DEFAULT_UNAUTHORIZED_MESSAGE, path?: string) {
    const { routerReplaceToLogin } = useRouterHook(false)
    // 关键：取消所有请求，避免后续 401 弹窗或跳转
    this.cancelAll()
    showErrorMessage(message)
    const authStore = useAuthStore()
    authStore.reset()
    routerReplaceToLogin(path)
    return Promise.reject(new Error(message))
  }

  protected initializeResponseInterceptor(): number {
    return this.instance.interceptors.response.use(
      (response) => {
        // 清理请求控制器
        cleanupRequest(response.config)

        const { success, content, message, code } = response.data

        if (success) {
          return content
        }

        if (code === '401') {
          return this.handleUnauthorized(DEFAULT_UNAUTHORIZED_MESSAGE, response.config.meta?.routerFullPath)
        }

        const errorMessage = message || DEFAULT_ERROR_MESSAGE
        showErrorMessage(errorMessage)
        return Promise.reject(new Error(errorMessage))
      },
      (error) => {
        // 错误拦截器：无论请求成功/失败，都清理存储的控制器
        cleanupRequest(error.config)

        // 处理 401 未授权错误
        if (error.response?.status === 401) {
          return this.handleUnauthorized(DEFAULT_UNAUTHORIZED_MESSAGE, error.config?.meta?.routerFullPath)
        }

        // 处理请求取消
        if (axios.isCancel(error)) {
          return Promise.reject(new Error('请求已取消'))
        }

        // 处理其他错误
        const errorMessage = error?.response?.data?.message || DEFAULT_ERROR_MESSAGE
        showErrorMessage(errorMessage)
        return Promise.reject(error)
      },
    )
  }
}

const baseHttp = new HttpClient({
  baseURL: getServiceBaseUrl('default', import.meta.env),
  timeout: REQUEST_TIMEOUT,
})

export { baseHttp }
