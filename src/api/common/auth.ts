import { baseHttp } from '@/api/request'

/**
 * 登录接口
 * @param data
 * @returns
 */
export function authLoginApi(data: Api.Auth.LoginParams) {
  return baseHttp.request<any>({
    url: '/system/user/login',
    method: 'POST',
    data,
    headers: {
      noToken: true,
      noSecret: true,
    }
  })
}

/**
 * 退出登录
 * @param data
 * @returns
 */
export function authLoginOutApi(data: Api.Auth.LogoutParams) {
  return baseHttp.request<boolean>({
    url: '/system/user/logout',
    method: 'post',
    data,
    headers: {
      noSecret: true,
    }
  })
}

/**
 * 修改密码
 * @param data
 * @returns
 */
export function authPasswordApi(data: Api.Auth.PasswordParams) {
  return baseHttp.request<boolean>({
    url: '/system/user/updatePassword',
    method: 'post',
    data,
  })
}
