import express from 'express'
import cors from 'cors'
import { createGame } from './routes/create-game/handler'
import { initializeStore } from './data-store/store'
import { details } from './routes/details/handler'
import { AppStoreKey } from './data-store/storageTypes'

export const makeApp = async () => {
  const store = initializeStore()

  const app = express()

  const corsMiddleware = cors({
    origin: '*',
  })

  app.use(corsMiddleware)
  app.use(express.json())

  app.set(AppStoreKey, store)

  app.get('/hello', (req, res) => {
    res.send('Hi')
  })

  app.post('/create-game', createGame)
  app.get('/details/:id', details)

  return app
}
