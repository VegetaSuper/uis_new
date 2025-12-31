import { request } from '../request';

/**
 * 获取缓存数据
 * @param cacheField
 * @returns
 */
export function getCacheData<T>(cacheField: string) {
  return request<T>({
    url: '/system/cache/query',
    method: 'post',
    data: {
      cacheField
    }
  });
}
