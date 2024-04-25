import { Store } from './storageTypes'
import { SQLiteStore } from './SQLiteStore'
import { sqliteStoreDirectory, storeType } from '../env'

export const initializeStore = (): Store => {
  switch (storeType) {
    case 'sqlite':
      return new SQLiteStore(sqliteStoreDirectory)
    default:
      throw new Error('Unknown Store Type')
  }
}
