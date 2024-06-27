import { RequestHandler } from 'express'
import { AppStoreKey, Store } from '../../data-store/storageTypes.js'
import { CreateGameInputType } from '@inscription/shared/types'

export const createGame: RequestHandler = async (req, res) => {
  const store = req.app.get(AppStoreKey) as Store

  let parsed: CreateGameInputType
}
