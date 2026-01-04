import { authLoginApi, authLoginOutApi } from '@/api/common/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // 用户信息
    const user = ref<App.Auth.User>({
      name: '',
      token: '',
      nameEn: '',
    })

    const permissionStr = ref<string>('')

    function setUser(data: App.Auth.User) {
      user.value = data
    }

    // 登录
    async function authLoginAction(params: Api.Auth.LoginParams) {
      try {
        const data = await authLoginApi(params)
        user.value = data
        permissionStr.value = data.permission.split('-')

        return true
      } catch (error) {
        return Promise.reject(error)
      }
    }

    // 登出
    async function authLoginOutAction() {
      try {
        await authLoginOutApi({
          loginName: unref(user).loginName,
          token: unref(user).token,
          userId: unref(user).id,
        })
        reset()
        return true
      } catch (error) {
        return Promise.reject(error)
      }
    }

    function reset() {
      user.value = {}
      permissionStr.value = ''
    }

    return {
      user,
      setUser,
      permissionStr,
      authLoginAction,
      authLoginOutAction,
      reset,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['user', 'permissionStr'],
    },
  },
)
