import env from 'env-var'

// Port needs to be above 1024, else we'll get an access error
export const port = env.get('PORT').required().asPortNumber()

export const storeType = env.get('STORE_TYPE').default('sqlite').asString()

export const sqliteStoreDirectory = env
  .get('SQLITE_STORE_DIRECTORY')
  .required(storeType === 'sqlite')
  .asString()
