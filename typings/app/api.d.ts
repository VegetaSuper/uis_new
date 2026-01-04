export {}

declare global {
  namespace Api {
    namespace Commom {
      type EnableStatus = 0 | 1
      interface PageResponse<T> {
        page: number
        size: number
        total: number
        list: T[]
      }
      interface PageRequest {
        page: number
        size: number
        sortDtoList?: any[]
        conditionDtoList?: any[]
        [key: string]: any
      }
    }

    namespace Auth {
      interface LoginParams {
        loginName: string
        password: string
        leagueHi: string
        locale: string
        cockpit: boolean
        remember: boolean
        userConfigDto: {
          locale: string
        }
      }

      interface LogoutParams {
        loginName?: string
        token?: string
        userId?: number
      }

      interface PasswordParams {
        oldPassword: string
        newPassword: string
        id: number
        resetPassword: number
      }
    }

    namespace Setting {
      interface Permission {
        id: number
        name: string
        path: string
        status: Commom.EnableStatus
      }

      interface Menu {
        id: number
        parentId: number
        code: string
        name: string
        type: 1 | 2
        status: Commom.EnableStatus
        sort: number
      }

      interface MenuTree extends Menu {
        children?: MenuTree[]
      }
      interface Button {
        id: number
        parentId: number
        code: string
        name: string
        status: Commom.EnableStatus
        sort: number
      }

      interface Role {
        id: number
        status: Commom.EnableStatus
        name: string
      }

      interface RoleConfigReq {
        id: number
        menuIds: number[]
      }

      interface User {
        id: number
        username: string
        status: Commom.EnableStatus
        roleIds: number[]
      }

      interface UserBindRoleReq {
        id: number
        roleIds: number[]
      }

      interface PasswordParams {
        id: number
        newPassword: string
        confirmPassword: string
      }
    }
  }
}
