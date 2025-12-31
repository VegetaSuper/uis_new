declare namespace Form {
  /**
   * 命名空间 Auth
   *
   * 表单 Form 模块: "auth"
   */
  namespace Auth {
    interface Model {
      userName: string;
      password: string;
      remember: boolean;
      cockpit: boolean;
    }

    interface RealModel {
      loginName: string;
      leagueHi: string;
      cockpit: boolean;
      remember: boolean;
      locale: string;
      userConfigDto: {
        locale: string;
      };
    }
  }
}
