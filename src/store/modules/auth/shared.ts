import { useAuthStore } from './index';

/** Get token */
export function getToken() {
  const authStore = useAuthStore();
  return authStore.userInfo?.token || '';
}
