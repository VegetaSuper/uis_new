import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 路由标题
     *
     * 可用于文档标题
     */
    title: string;
    /**
     * 路由的 I18n key
     *
     * 用于 i18n，如果设置，title 将被忽略
     */
    i18nKey?: App.I18n.I18nKey | null;
    /**
     * 路由角色
     *
     * 如果当前用户至少拥有其中一个角色，则可以访问该路由
     *
     * 仅在路由模式为 "static" 时有效，如果路由模式为 "dynamic"，将被忽略
     */
    roles?: string[];
    /** 是否缓存路由 */
    keepAlive?: boolean | null;
    /**
     * 是否为常量路由
     *
     * 当设置为 true 时，访问该路由将不需要登录验证和权限验证
     */
    constant?: boolean | null;
    /**
     * Iconify 图标
     *
     * 可用于菜单或面包屑
     */
    icon?: string;
    /**
     * 本地图标
     *
     * 位于 "src/assets/svg-icon"，如果设置，icon 将被忽略
     */
    localIcon?: string;
    /** 图标大小。宽度和高度相同。 */
    iconFontSize?: number;
    /** 路由顺序 */
    order?: number | null;
    /** 路由的外部链接 */
    href?: string | null;
    /** 是否在菜单中隐藏路由 */
    hideInMenu?: boolean | null;
    /**
     * 进入路由时将激活的菜单 key
     *
     * 该路由不在菜单中
     *
     * @example
     *   路由是 "user_detail"，如果设置为 "user_list"，菜单 "user_list" 将被激活
     */
    activeMenu?: import('@elegant-router/types').RouteKey | null;
    /**
     * 默认情况下，相同的路由路径将使用一个标签页，即使查询参数不同，如果设置为 true，不同查询参数的路由将使用不同的标签页
     */
    multiTab?: boolean | null;
    /** 如果设置，路由将在标签页中固定，值为固定标签页的顺序 */
    fixedIndexInTab?: number | null;
    /** 如果设置查询参数，进入路由时将自动携带 */
    query?: { key: string; value: string }[] | null;
  }
}
