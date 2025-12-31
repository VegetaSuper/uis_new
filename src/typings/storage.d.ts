/** 存储命名空间 */
declare namespace StorageType {
  interface Session {
    /** 主题颜色 */
    themeColor: string;
    /** 查询条件 */
    searchConditions: Record<string, any>;
  }

  interface Local {
    /** i18n 语言 */
    lang: App.I18n.LangType;
    /** 登录信息 */
    loginInfo: Record<string, any>;
    /** token */
    token: string;
    /** 混合菜单的固定侧边栏 */
    mixSiderFixed: CommonType.YesOrNo;
    /** 刷新 token */
    refreshToken: string;
    /** 主题颜色 */
    themeColor: string;
    /** 暗色模式 */
    darkMode: boolean;
    /** 主题设置 */
    themeSettings: App.Theme.ThemeSetting;
    /**
     * 覆盖主题标志
     *
     * 值为项目的构建时间
     */
    overrideThemeFlag: string;
    /** 全局标签页 */
    globalTabs: App.Global.Tab[];
    /** 移动端之前的备份主题设置 */
    backupThemeSettingBeforeIsMobile: {
      layout: UnionKey.ThemeLayoutMode;
      siderCollapse: boolean;
    };
    /** 上次登录的用户 ID */
    lastLoginUserId: string;
  }
}
