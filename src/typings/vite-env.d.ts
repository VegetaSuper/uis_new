/**
 * 命名空间 Env
 *
 * 用于声明 import.meta 对象的类型
 */
declare namespace Env {
  /** 路由历史模式 */
  type RouterHistoryMode = 'hash' | 'history' | 'memory';

  /** import.meta 的接口 */
  // eslint-disable-next-line @typescript-eslint/no-shadow
  interface ImportMeta extends ImportMetaEnv {
    /** 应用程序的基础 URL */
    readonly VITE_BASE_URL: string;
    /** 应用程序的标题 */
    readonly VITE_APP_TITLE: string;
    /** 路由历史模式 */
    readonly VITE_ROUTER_HISTORY_MODE?: RouterHistoryMode;
    /** Iconify 图标的前缀 */
    readonly VITE_ICON_PREFIX: 'icon';
    /**
     * 本地图标的前缀
     *
     * 此前缀以图标前缀开头
     */
    readonly VITE_ICON_LOCAL_PREFIX: 'icon-local';
    /** 后端服务基础 URL */
    readonly VITE_SERVICE_BASE_URL: string;
    /**
     * 后端服务成功码
     *
     * 当收到此码时，请求成功
     */
    readonly VITE_SERVICE_SUCCESS_CODE: string;
    /**
     * 加密密钥
     */
    readonly VITE_APP_SECRET: string;
    /**
     * 后端服务登出码
     *
     * 当收到此码时，用户将被登出并重定向到登录页
     *
     * 使用 "," 分隔多个码
     */
    readonly VITE_SERVICE_LOGOUT_CODES: string;
    /**
     * 后端服务弹窗登出码
     *
     * 当收到此码时，将通过弹窗提示用户登出
     *
     * 使用 "," 分隔多个码
     */
    readonly VITE_SERVICE_MODAL_LOGOUT_CODES: string;
    /**
     * 后端服务 token 过期码
     *
     * 当收到此码时，将刷新 token 并重新发送请求
     *
     * 使用 "," 分隔多个码
     */
    readonly VITE_SERVICE_EXPIRED_TOKEN_CODES: string;
    /** 当路由模式为静态时，定义的超管角色 */
    readonly VITE_STATIC_SUPER_ROLE: string;
    /**
     * 其他后端服务基础 URL
     *
     * 值为 JSON 格式
     */
    readonly VITE_OTHER_SERVICE_BASE_URL: string;
    /**
     * 是否启用 HTTP 代理
     *
     * 仅在开发环境中有效
     */
    readonly VITE_HTTP_PROXY?: CommonType.YesOrNo;
    /**
     * 权限路由模式
     *
     * - Static: 权限路由在前端生成
     * - Dynamic: 权限路由在后端生成
     */
    readonly VITE_AUTH_ROUTE_MODE: 'static' | 'dynamic';
    /**
     * 首页路由 key
     *
     * 仅在权限路由模式为静态时有效，如果路由模式为动态，首页路由 key 在后端定义
     */
    readonly VITE_ROUTE_HOME: string;
    /**
     * 如果未设置菜单图标，则使用默认菜单图标
     *
     * Iconify 图标名称
     */
    readonly VITE_MENU_ICON: string;
    /** 是否使用 sourcemap 构建 */
    readonly VITE_SOURCE_MAP?: CommonType.YesOrNo;
    /**
     * Iconify API 提供者 URL
     *
     * 如果项目部署在内网，可以将 API 提供者 URL 设置为本地 Iconify 服务器
     *
     * @link https://docs.iconify.design/api/providers.html
     */
    readonly VITE_ICONIFY_URL?: string;
    /** 用于区分不同域的存储 */
    readonly VITE_STORAGE_PREFIX?: string;
    /** 配置应用打包后是否自动检测更新 */
    readonly VITE_AUTOMATICALLY_DETECT_UPDATE?: CommonType.YesOrNo;
    /** 在终端显示代理 URL 日志 */
    readonly VITE_PROXY_LOG?: CommonType.YesOrNo;
    /** 启动编辑器 */
    readonly VITE_DEVTOOLS_LAUNCH_EDITOR?: import('vite-plugin-vue-devtools').VitePluginVueDevToolsOptions['launchEditor'];
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta;
}
