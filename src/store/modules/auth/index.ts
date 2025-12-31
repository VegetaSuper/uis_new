import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { defineStore } from 'pinia';
import { useLoading } from '@sa/hooks';
import { md5 } from 'js-md5';
import { fetchLogin, fetchLogout } from '@/service/api';
import { useRouterPush } from '@/hooks/business/common/router';
import { localStg, storagePrefix } from '@/utils/storage';
import { SetupStoreId } from '@/enum';
import { $t } from '@/locales';
import { useRouteStore } from '../route';
import { useTabStore } from '../tab';
import { useAppStore } from '../app';

export const useAuthStore = defineStore(
  SetupStoreId.Auth,
  () => {
    const route = useRoute();
    const authStore = useAuthStore();
    const routeStore = useRouteStore();
    const tabStore = useTabStore();
    const { toLogin, redirectFromLogin } = useRouterPush(false);
    const { loading: loginLoading, startLoading, endLoading } = useLoading();

    const userInfo: Api.Auth.UserInfo = reactive({
      id: '',
      token: '',
      name: '',
      roles: [],
      buttons: [],
      systemMenuDtoList: []
    });

    // 是否展示修改密码弹窗，初始密码用户
    const showResetPassword = computed(() => {
      return userInfo?.userConfigDto?.resetPassword;
    });

    // 用户权限
    const userPermission = computed(() => {
      return userInfo.permission;
    });
    const userPermissionField = computed(() => {
      return userInfo.permissionField;
    });

    /** is super role in static route */
    const isStaticSuper = computed(() => {
      const { VITE_AUTH_ROUTE_MODE, VITE_STATIC_SUPER_ROLE } = import.meta.env;

      return VITE_AUTH_ROUTE_MODE === 'static' && userInfo.roles.includes(VITE_STATIC_SUPER_ROLE);
    });

    /** Is login */
    const isLogin = computed(() => Boolean(userInfo.token));

    /** Reset auth store */
    async function resetStore() {
      recordUserId();
      // 退出登录
      await fetchLogout({
        loginName: userInfo.loginName,
        token: userInfo.token,
        userId: userInfo.id
      });

      authStore.$reset();

      if (route.meta.constant) {
        await toLogin();
      }

      tabStore.cacheTabs();
      routeStore.resetStore();
    }

    /** 记录上一次登录会话的用户 ID，用于与下次登录时的当前用户 ID 进行比较 */
    function recordUserId() {
      if (!userInfo.id) {
        return;
      }

      // 在本地存储当前用户 ID，用于下次登录时比较
      localStg.set('lastLoginUserId', userInfo.id);
    }

    /**
     * 检查当前登录用户是否与上一次登录用户不同，如果不同，清除所有标签页
     *
     * @returns {boolean} 是否清除所有标签页
     */
    function checkTabClear(): boolean {
      if (!userInfo.id) {
        return false;
      }

      const lastLoginUserId = localStg.get('lastLoginUserId');

      // 如果当前用户与上一次用户不同，清除所有标签页
      if (!lastLoginUserId || lastLoginUserId !== userInfo.id) {
        localStg.remove('globalTabs');
        tabStore.clearTabs();

        localStg.remove('lastLoginUserId');
        return true;
      }

      localStg.remove('lastLoginUserId');
      return false;
    }

    /**
     * 登录
     *
     * @param params 登录参数对象
     * @param [redirect=true] 登录后是否重定向，默认为 `true`
     */
    async function login(params: Form.Auth.Model, redirect = true) {
      const appStore = useAppStore();

      startLoading();
      // 格式化登录参数
      const query: Form.Auth.RealModel = {
        loginName: params.userName,
        leagueHi: md5(params.password),
        cockpit: params.cockpit,
        remember: params.remember,
        locale: appStore.locale,
        userConfigDto: {
          locale: appStore.locale
        }
      };

      const times = 7 * 24 * 60 * 60 * 1000;

      if (params.remember) {
        localStg.set(
          'loginInfo',
          {
            userName: query.loginName,
            password: params.password,
            remember: true
          },
          times
        );
      } else {
        localStg.set(
          'loginInfo',
          {
            userName: query.loginName
          },
          times
        );
      }

      const { data, error } = await fetchLogin(query);

      if (!error) {
        if (data && data.readableFileType) {
          data.readableFileType += ',jfif';
        }
        Object.assign(userInfo, data);

        // 检查是否需要清除标签页
        const isClear = checkTabClear();
        let needRedirect = redirect;

        if (isClear) {
          // 如果需要清除标签页，则不需要重定向
          needRedirect = false;
        }
        await redirectFromLogin(needRedirect);

        window.$notification?.success({
          title: $t('page.login.common.loginSuccess'),
          content: $t('page.login.common.welcomeBack', {
            userName: userInfo.name
          }),
          duration: 4500
        });
      }

      endLoading();
    }

    return {
      userInfo,
      isStaticSuper,
      isLogin,
      loginLoading,
      resetStore,
      login,
      showResetPassword,
      userPermission,
      userPermissionField
    };
  },
  {
    persist: {
      key: `${storagePrefix}auth-store`,
      storage: sessionStorage,
      pick: ['userInfo']
    }
  }
);
