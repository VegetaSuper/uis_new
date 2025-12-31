import { request } from '../request';

/**
 * 账号密码登录
 * @param data
 * @returns
 */
export function fetchLogin(data: Form.Auth.RealModel) {
  return request<Api.Auth.UserInfo>({
    url: '/system/user/login',
    method: 'post',
    isEncrypt: false,
    data
  });
}

/**
 * 退出登录
 * @param data
 * @returns
 */
export function fetchLogout(data: Api.Auth.LogoutReq) {
  return request<null>({
    url: '/system/user/logout',
    method: 'post',
    isEncrypt: false,
    data
  });
}
