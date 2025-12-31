declare namespace Api {
  /**
   * 命名空间 Auth
   *
   * 后端 API 模块: "auth"
   */
  namespace Auth {
    interface UserInfo {
      id: string;
      name: string;
      roles: string[];
      buttons: string[];
      token: string;
      [key: string]: any;
    }

    interface LogoutReq {
      loginName: string;
      token: string;
      userId: string;
    }
  }
}
