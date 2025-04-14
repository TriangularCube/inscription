import express from 'express'
import cors from 'cors'
import { createGame } from './routes/create-game/handler.js'
import { gameDetails } from './routes/game-details/handler.js'
import { corsArray } from './cors.js'

export const makeApp = () => {
  const app = express()

  const corsMiddleware = cors({
    origin: corsArray, // TODO
  })

  app.use(corsMiddleware)
  app.use(express.json())

  app.post('/create-game', createGame)
  app.get('/game-details/:id', gameDetails)

  return app
}
