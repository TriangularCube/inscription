import express from 'express'
import cors from 'cors'
import { initializeStore } from './data-store/store.js'
import { AppStoreKey } from './data-store/storageTypes.js'
import { createGame } from './routes/create-game/handler.js'

export const makeApp = () => {
  const app = express()

  const corsMiddleware = cors({
    origin: '*', // TODO
  })

  app.use(corsMiddleware)
  app.use(express.json())

  const store = initializeStore()
  app.set(AppStoreKey, store)

  app.post('/create-game', createGame)

  return app
}
