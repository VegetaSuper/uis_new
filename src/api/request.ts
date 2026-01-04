import BaseHttpClient from '@rengar-admin/axios'
import type { AxiosRequestConfig } from 'axios'
import { useRouterHook } from '@/hooks/router'
import { useAuthStore, useLanguageStore } from '@/stores'
import router from '@/router'
import { getServiceBaseUrl } from '@/utils/service'
import { md5 } from 'js-md5'
import { Encrypt } from '@/utils/secret'

function showErrorMessage(message: string) {
  window.$message?.error?.(message)
}

class HttpClient extends BaseHttpClient {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  protected initializeRequestInterceptor(): number {
    return this.instance.interceptors.request.use(
      (config) => {
        const { noSecret, noToken } = config.headers
        const { user } = useAuthStore()

        const { currentLanguage } = useLanguageStore()

        // 设置请求头
        config.headers.locale = currentLanguage

        if (!noToken && user.token) {
          config.headers.token = user.token
          let randomKey = new Date().getTime();
          config.headers.randomKey = randomKey
          config.headers.sign = md5(randomKey + user.loginName); //设置签名
        }


        // 请求参数默认加密
        if (!noSecret && config.method === 'post') {
          let dataStr = JSON.stringify(config.data);
          config.headers.secure = true;
          config.data = { detail: Encrypt(dataStr, user.longitude, user.latitude) };
        }
        // ✅ 记录发起请求时的路由路径
        config.meta = config.meta || {}
        config.meta.routerFullPath = router.currentRoute.value.fullPath
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  private handleUnauthorized(message: string = '未授权，请重新登录', path?: string) {
    const { routerReplaceToLogin } = useRouterHook(false)
    // ✅ 关键：取消所有请求，避免后续 401 弹窗或跳转
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
        const { success, content, message, code } = response.data

        if (success) {
          return content
        }

        if (code === '401') {
          return this.handleUnauthorized(undefined, response.config.meta?.routerFullPath)
        } else {
          showErrorMessage(message || '请求失败')
          return Promise.reject(new Error(message || '请求失败'))
        }
      },
      (error) => {
        if (error.response?.status === 401) {
          return this.handleUnauthorized(undefined, error.config?.meta?.routerFullPath)
        }
        showErrorMessage(error?.response?.data?.message || '请求失败')
        return Promise.reject(error)
      },
    )
  }
}

const baseHttp = new HttpClient({
  baseURL: getServiceBaseUrl('default', import.meta.env),
  timeout: 1000 * 10,
})

export { baseHttp }
