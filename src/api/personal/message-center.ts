
import { baseHttp } from '@/api/request'

export interface message {
  [key: string]: any
}

/**
 *
 * @param data
 * @returns
 */
export function getMessageList(data: Api.Commom.PageRequest) {
  return baseHttp.request<Api.Commom.PageResponse<message>>({
    url: '/websocket/userMessage/list',
    method: 'post',
    data
  })
}
