import { RequestHandler } from 'express'
import { type } from 'arktype'
import { createGameData } from './types.js'
import { createNewGameState } from './createNewGameState.js'
import { store } from '../../store/store.js'

export const createGame: RequestHandler = (req, res) => {
  const parsedOutput = createGameData(req.body)

  if (parsedOutput instanceof type.errors) {
    console.log('Parse Error')
    res.status(400).json({
      error: {
        code: 'Bad Input',
        message: 'Bad Input',
      },
    })
    return
  }

  const players = parsedOutput.players

  const newState = createNewGameState(players)
  const id = store.createGame(newState)

  res.json({
    id,
  })
}
