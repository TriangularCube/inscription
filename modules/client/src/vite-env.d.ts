/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly INSCRIPTION_APP_API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
