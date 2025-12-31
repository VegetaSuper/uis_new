import type { AxiosResponse } from 'axios';
import { BACKEND_ERROR_CODE, createFlatRequest } from '@sa/axios';
import { md5 } from 'js-md5';
import { useAuthStore } from '@/store/modules/auth';
import { getToken } from '@/store/modules/auth/shared';
import { Encrypt } from '@/utils/secret';
import { getServiceBaseURL } from '@/utils/service';
import { $t } from '@/locales';
import { showErrorMsg } from './shared';
import type { RequestInstanceState } from './type';

const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);

export const request = createFlatRequest(
  {
    baseURL
  },
  {
    defaultState: {
      errMsgStack: [],
      refreshTokenPromise: null,
      timeout: 600 * 1000,
      isEncrypt: true
    } as RequestInstanceState,
    transform(response: AxiosResponse<App.Service.Response<any>>) {
      return response.data.content;
    },
    async onRequest(config) {
      const authStore = useAuthStore();

      const token = getToken();
      const { headers } = config;

      // 补充旧项目的 headers 参数
      const randomKey = new Date().getTime();
      Object.assign(headers, {
        token,
        randomKey,
        sign: md5(randomKey + authStore.userInfo?.loginName || ''),
        locale: authStore.userInfo?.userConfigDto?.locale || 'zh-cn'
      });

      /**
       * 动态设置超时时间
       * 如果请求配置中没有设置 timeout，则使用 store 中的默认超时时间
       */
      if (config.timeout === undefined) {
        config.timeout = request.state.timeout;
      }

      const isEncrypt = config.isEncrypt ?? request.state.isEncrypt;

      if (isEncrypt) {
        // 设置 secure 请求头
        headers.secure = true;
        headers['Access-Control-Allow-Origin-Type'] = '*';

        if (config.data && !(config.data instanceof FormData)) {
          const dataStr = JSON.stringify(config.data);
          const { cryptoKeys } = config;

          config.data = {
            detail: Encrypt(dataStr, cryptoKeys?.longitude, cryptoKeys?.latitude)
          };
        }
        if (config.params) {
          const paramsStr = JSON.stringify(config.params);
          const { cryptoKeys } = config;

          config.params = {
            detail: Encrypt(paramsStr, cryptoKeys?.longitude, cryptoKeys?.latitude)
          };
        }
      }

      return config;
    },
    isBackendSuccess(response) {
      // 当后端响应 success 为 true 时，表示请求成功
      return response.data.success === true;
    },
    async onBackendFail(response, _instance) {
      const authStore = useAuthStore();
      const responseCode = response.data.code ? String(response.data.code) : '';

      function handleLogout() {
        authStore.resetStore();
      }

      function logoutAndCleanup() {
        handleLogout();
        window.removeEventListener('beforeunload', handleLogout);

        const errorMessage = response.data.message || '';
        request.state.errMsgStack = request.state.errMsgStack.filter(msg => msg !== errorMessage);
      }

      // 当后端响应码在 `logoutCodes` 中时，表示用户将被登出并重定向到登录页
      const logoutCodes = import.meta.env.VITE_SERVICE_LOGOUT_CODES?.split(',') || [];
      if (logoutCodes.includes(responseCode)) {
        handleLogout();
        return null;
      }

      // 当后端响应码在 `modalLogoutCodes` 中时，表示将通过弹窗提示用户登出
      const modalLogoutCodes = import.meta.env.VITE_SERVICE_MODAL_LOGOUT_CODES?.split(',') || [];
      const errorMessage = response.data.message || '';
      if (modalLogoutCodes.includes(responseCode) && !request.state.errMsgStack?.includes(errorMessage)) {
        request.state.errMsgStack = [...(request.state.errMsgStack || []), errorMessage];

        // 防止用户刷新页面
        window.addEventListener('beforeunload', handleLogout);

        window.$dialog?.error({
          title: $t('common.error'),
          content: errorMessage,
          positiveText: $t('common.confirm'),
          maskClosable: false,
          closeOnEsc: false,
          onPositiveClick() {
            logoutAndCleanup();
          },
          onClose() {
            logoutAndCleanup();
          }
        });

        return null;
      }

      return null;
    },
    onError(error) {
      // 当请求失败时，可以显示错误消息

      let message = error.message;
      let backendErrorCode = '';

      // 获取后端错误消息和错误码
      if (error.code === BACKEND_ERROR_CODE) {
        message = error.response?.data?.message || message;
        backendErrorCode = String(error.response?.data?.code || '');
      }

      // 错误消息已在弹窗中显示
      const modalLogoutCodes = import.meta.env.VITE_SERVICE_MODAL_LOGOUT_CODES?.split(',') || [];
      if (modalLogoutCodes.includes(backendErrorCode)) {
        return;
      }

      showErrorMsg(request.state, message);
    }
  }
);
