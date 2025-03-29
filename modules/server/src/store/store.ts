import type { Store } from './storageTypes.js'
import { sqliteStoreDirectory, storeType } from '../env.js'
import { SQLiteStore } from './SQLiteStore.js'

export const store: Store = (() => {
  switch (storeType) {
    case 'sqlite':
      return new SQLiteStore(sqliteStoreDirectory)
    default:
      throw new Error('No Store Type Selected')
  }
})()
