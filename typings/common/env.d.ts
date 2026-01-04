declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_PORT: string
  readonly VITE_API_URL: string
  readonly VITE_HTTP_PROXY: 'Y' | 'N'
  readonly VITE_BASE_URL: string
  readonly VITE_APP_SECRET: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
