import express from 'express'
import cors from 'cors'
import { createGame } from './routes/create-game/handler'
import { initializeStore } from './data-store/store'

export const makeApp = async () => {
  const store = initializeStore()

  const app = express()

  const corsMiddleware = cors({
    origin: '*',
  })

  app.use(corsMiddleware)
  app.use(express.json())

  app.set('store', store)

  app.get('/hello', (req, res) => {
    res.send('Hi')
  })

  app.post('/create-game', createGame)

  return app
}
