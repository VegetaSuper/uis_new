
import { baseHttp } from '@/api/request'

export function getMessageList(data?: any) {
  return baseHttp.request<any>({
    url: '/websocket/userMessage/list',
    method: 'post',
    data
  })
}
