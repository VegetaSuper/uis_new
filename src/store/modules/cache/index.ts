import { defineStore } from 'pinia';
import { getCacheData } from '@/service/api';
import { SetupStoreId } from '@/enum';

/**
 * 缓存 Store
 * 用于储存系统中所有的查询条件，并提供 1 分钟的 session 缓存
 */
export const useCacheStore = defineStore(SetupStoreId.Cache, () => {
  const getUserListAll = async () => {
    const data = await getCacheData<any[]>('USER_LIST_ALL');
    return (data || []).map(item => {
      const { id, name, names, namesJson, nameEn, type, enable } = item || {};
      // namesJson 可能缺失，提供一个兜底的结构避免列表渲染时报 undefined
      const safeNamesJson = namesJson || {
        name: name || '',
        name_en: nameEn || ''
      };
      return { id, name, names, namesJson: safeNamesJson, type, enable };
    });
  };

  return {
    getUserListAll
  };
});
