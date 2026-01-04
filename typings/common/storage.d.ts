/** 存储命名空间 */
declare namespace StorageType {
  interface Session {}
  interface Local {
    /** 登录信息 */
    loginInfo: Record<string, any>
  }
}
