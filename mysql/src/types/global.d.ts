declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_NAME: string
      DATABASE_USER: string
      DATABASE_SECRET: string
      DATABASE_HOST: string
    }
  }
}

export {}
