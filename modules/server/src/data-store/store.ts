import type { Store } from './storageTypes.js'
import { SQLiteStore } from './SQLiteStore.js'
import { sqliteStoreDirectory, storeType } from '../env.js'

export const initializeStore = (): Store => {
  switch (storeType) {
    case 'sqlite':
      return new SQLiteStore(sqliteStoreDirectory)
    default:
      throw new Error('Unknown Store Type')
  }
}
