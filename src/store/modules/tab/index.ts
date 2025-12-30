import { computed, ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { RouteKey } from '@elegant-router/types';
import { router } from '@/router';
import { useRouteStore } from '@/store/modules/route';
import { useRouterPush } from '@/hooks/business/common/router';
import { localStg } from '@/utils/storage';
import { SetupStoreId } from '@/enum';
import { useThemeStore } from '../theme';
import {
  extractTabsByAllRoutes,
  filterTabsByIds,
  findTabByRouteName,
  getAllTabs,
  getDefaultHomeTab,
  getFixedTabIds,
  getTabByRoute,
  getTabIdByRoute,
  isTabInTabs,
  reorderFixedTabs,
  updateTabByI18nKey,
  updateTabsByI18nKey
} from './shared';

export const useTabStore = defineStore(SetupStoreId.Tab, () => {
  const routeStore = useRouteStore();
  const themeStore = useThemeStore();
  const { routerPush } = useRouterPush(false);

  /** 标签页 */
  const tabs = ref<App.Global.Tab[]>([]);

  /** 获取活动标签页 */
  const homeTab = ref<App.Global.Tab>();

  /** 初始化首页标签页 */
  function initHomeTab() {
    homeTab.value = getDefaultHomeTab(router, routeStore.routeHome);
  }

  /** 获取所有标签页 */
  const allTabs = computed(() => getAllTabs(tabs.value, homeTab.value));

  /** 活动标签页 id */
  const activeTabId = ref<string>('');

  /**
   * 设置活动标签页 id
   *
   * @param id 标签页 id
   */
  function setActiveTabId(id: string) {
    activeTabId.value = id;
  }

  /**
   * 初始化标签页 store
   *
   * @param currentRoute 当前路由
   */
  function initTabStore(currentRoute: App.Global.TabRoute) {
    const storageTabs = localStg.get('globalTabs');

    if (themeStore.tab.cache && storageTabs) {
      const extractedTabs = extractTabsByAllRoutes(router, storageTabs);
      tabs.value = updateTabsByI18nKey(extractedTabs);
    }

    addTab(currentRoute);
  }

  /**
   * 添加标签页
   *
   * @param route 标签页路由
   * @param active 是否激活添加的标签页
   */
  function addTab(route: App.Global.TabRoute, active = true) {
    const tab = getTabByRoute(route);

    const isHomeTab = tab.id === homeTab.value?.id;

    if (!isHomeTab && !isTabInTabs(tab.id, tabs.value)) {
      tabs.value.push(tab);
    }

    if (active) {
      setActiveTabId(tab.id);
    }
  }

  /**
   * 移除标签页
   *
   * @param tabId 标签页 id
   */
  async function removeTab(tabId: string) {
    const removeTabIndex = tabs.value.findIndex(tab => tab.id === tabId);
    if (removeTabIndex === -1) return;

    const removedTabRouteKey = tabs.value[removeTabIndex].routeKey;
    const isRemoveActiveTab = activeTabId.value === tabId;

    // 如果移除最后一个标签页，则切换到倒数第二个标签页
    const nextTab = tabs.value[removeTabIndex + 1] || tabs.value[removeTabIndex - 1] || homeTab.value;

    // 移除标签页
    tabs.value.splice(removeTabIndex, 1);

    // 如果当前标签页被移除，则切换到下一个标签页
    if (isRemoveActiveTab && nextTab) {
      await switchRouteByTab(nextTab);
    }

    // 重置路由缓存
    routeStore.resetRouteCache(removedTabRouteKey);
  }

  /** 移除活动标签页 */
  async function removeActiveTab() {
    await removeTab(activeTabId.value);
  }

  /**
   * 根据路由名称移除标签页
   *
   * @param routeName 路由名称
   */
  async function removeTabByRouteName(routeName: RouteKey) {
    const tab = findTabByRouteName(routeName, tabs.value);
    if (!tab) return;

    await removeTab(tab.id);
  }

  /**
   * 清除标签页
   *
   * @param excludes 排除的标签页 ids
   */
  async function clearTabs(excludes: string[] = []) {
    const remainTabIds = [...getFixedTabIds(tabs.value), ...excludes];

    // 识别要移除的标签页并收集它们的 routeKeys（如果策略是 'close'）
    const tabsToRemove = tabs.value.filter(tab => !remainTabIds.includes(tab.id));
    const routeKeysToReset: RouteKey[] = [];

    for (const tab of tabsToRemove) {
      routeKeysToReset.push(tab.routeKey);
    }

    const removedTabsIds = tabsToRemove.map(tab => tab.id);

    // 如果根据 excludes 和固定标签页，实际上没有标签页被移除，则退出
    if (removedTabsIds.length === 0) {
      return;
    }

    const isRemoveActiveTab = removedTabsIds.includes(activeTabId.value);
    // filterTabsByIds 返回不在 removedTabsIds 中的标签页，这些是将保留的标签页
    const updatedTabs = filterTabsByIds(removedTabsIds, tabs.value);

    function update() {
      tabs.value = updatedTabs;
    }

    if (!isRemoveActiveTab) {
      update();
    } else {
      const activeTabCandidate = updatedTabs[updatedTabs.length - 1] || homeTab.value;

      if (activeTabCandidate) {
        // 确保有一个标签页可以切换
        await switchRouteByTab(activeTabCandidate);
      }
      // 无论切换是否成功或是否找到候选标签页，都更新标签页数组
      update();
    }

    // 在标签页更新且路由可能切换后，重置已移除标签页的缓存
    for (const routeKey of routeKeysToReset) {
      routeStore.resetRouteCache(routeKey);
    }
  }

  const { routerPushByKey } = useRouterPush();
  /**
   * 替换标签页
   *
   * @param key 路由 key
   * @param options 路由 push 选项
   */
  async function replaceTab(key: RouteKey, options?: App.Global.RouterPushOptions) {
    const oldTabId = activeTabId.value;

    // 推送新路由
    await routerPushByKey(key, options);

    // 移除旧标签页（排除固定标签页）
    if (!isTabRetain(oldTabId)) {
      await removeTab(oldTabId);
    }
  }

  /**
   * 根据标签页切换路由
   *
   * @param tab
   */
  async function switchRouteByTab(tab: App.Global.Tab) {
    const fail = await routerPush(tab.fullPath);
    if (!fail) {
      setActiveTabId(tab.id);
    }
  }

  /**
   * 清除左侧标签页
   *
   * @param tabId
   */
  async function clearLeftTabs(tabId: string) {
    const tabIds = tabs.value.map(tab => tab.id);
    const index = tabIds.indexOf(tabId);
    if (index === -1) return;

    const excludes = tabIds.slice(index);
    await clearTabs(excludes);
  }

  /**
   * 清除右侧标签页
   *
   * @param tabId
   */
  async function clearRightTabs(tabId: string) {
    const isHomeTab = tabId === homeTab.value?.id;
    if (isHomeTab) {
      clearTabs();
      return;
    }

    const tabIds = tabs.value.map(tab => tab.id);
    const index = tabIds.indexOf(tabId);
    if (index === -1) return;

    const excludes = tabIds.slice(0, index + 1);
    await clearTabs(excludes);
  }

  /**
   * 固定标签页
   *
   * @param tabId
   */
  function fixTab(tabId: string) {
    const tabIndex = tabs.value.findIndex(t => t.id === tabId);
    if (tabIndex === -1) return;

    const tab = tabs.value[tabIndex];
    const fixedCount = getFixedTabIds(tabs.value).length;
    tab.fixedIndex = fixedCount;

    if (tabIndex !== fixedCount) {
      tabs.value.splice(tabIndex, 1);
      tabs.value.splice(fixedCount, 0, tab);
    }

    reorderFixedTabs(tabs.value);
  }

  /**
   * 取消固定标签页
   *
   * @param tabId
   */
  function unfixTab(tabId: string) {
    const tabIndex = tabs.value.findIndex(t => t.id === tabId);
    if (tabIndex === -1) return;

    const tab = tabs.value[tabIndex];
    tab.fixedIndex = undefined;

    const fixedCount = getFixedTabIds(tabs.value).length;
    if (tabIndex !== fixedCount) {
      tabs.value.splice(tabIndex, 1);
      tabs.value.splice(fixedCount, 0, tab);
    }

    reorderFixedTabs(tabs.value);
  }

  /**
   * 设置标签页新标签
   *
   * @default activeTabId
   * @param label 新标签页标签
   * @param tabId 标签页 id
   */
  function setTabLabel(label: string, tabId?: string) {
    const id = tabId || activeTabId.value;

    const tab = tabs.value.find(item => item.id === id);
    if (!tab) return;

    tab.oldLabel = tab.label;
    tab.newLabel = label;
  }

  /**
   * 重置标签页标签
   *
   * @default activeTabId
   * @param tabId 标签页 id
   */
  function resetTabLabel(tabId?: string) {
    const id = tabId || activeTabId.value;

    const tab = tabs.value.find(item => item.id === id);
    if (!tab) return;

    tab.newLabel = undefined;
  }

  /**
   * 标签页是否保留
   *
   * @param tabId
   */
  function isTabRetain(tabId: string) {
    if (tabId === homeTab.value?.id) return true;

    const fixedTabIds = getFixedTabIds(tabs.value);

    return fixedTabIds.includes(tabId);
  }

  /** 根据语言环境更新标签页 */
  function updateTabsByLocale() {
    tabs.value = updateTabsByI18nKey(tabs.value);

    if (homeTab.value) {
      homeTab.value = updateTabByI18nKey(homeTab.value);
    }
  }

  /** 缓存标签页 */
  function cacheTabs() {
    if (!themeStore.tab.cache) return;

    localStg.set('globalTabs', tabs.value);
  }

  // 当页面关闭或刷新时缓存标签页
  useEventListener(window, 'beforeunload', () => {
    cacheTabs();
  });

  return {
    /** All tabs */
    tabs: allTabs,
    activeTabId,
    homeTab,
    initHomeTab,
    initTabStore,
    addTab,
    removeTab,
    removeActiveTab,
    removeTabByRouteName,
    replaceTab,
    clearTabs,
    clearLeftTabs,
    clearRightTabs,
    fixTab,
    unfixTab,
    switchRouteByTab,
    setTabLabel,
    resetTabLabel,
    isTabRetain,
    updateTabsByLocale,
    getTabIdByRoute,
    cacheTabs
  };
});
