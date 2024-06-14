import env from 'env-var'

// Port needs to be above 1024, else we'll get an access error
export const port = env.get('INSCRIPTION_SERVER_PORT').required().asPortNumber()

export const storeType = env
  .get('INSCRIPTION_SERVER_STORE_TYPE')
  .default('sqlite')
  .asString()

export const sqliteStoreDirectory = env
  .get('INSCRIPTION_SERVER_SQLITE_STORE_DIRECTORY')
  .required(storeType === 'sqlite')
  .asString()
