import { useAuthStore } from '@/stores'
export function useAuth(role: string | string[]) {
  const authStore = useAuthStore()
  if (Array.isArray(role)) {
    return role.some((item) => authStore.permissionStr.includes(item))
  } else if (typeof role === 'string') {
    return authStore.permissionStr.includes(role)
  }
  return false
}
