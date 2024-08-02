import { RequestHandler } from 'express'
import { AppStoreKey, Store } from '../../data-store/storageTypes.js'
import { createGameInputSchema } from '@inscription/common/types'
import { createNewGameState } from './createNewGameState.js'

export const createGame: RequestHandler = (req, res) => {
  const parsedOutput = createGameInputSchema.safeParse(req.body)

  if (!parsedOutput.success) {
    console.error('Parse Error', parsedOutput.error)
    return res.status(400).json({
      message: 'Bad Input',
    })
  }

  // Zod types don't play nicely with Typescript
  const players = parsedOutput.data as string[]

  const newState = createNewGameState(players)
  const store = req.app.get(AppStoreKey) as Store

  const id = store.createGame(newState)

  res.json({
    id,
    game: true,
  })
}
