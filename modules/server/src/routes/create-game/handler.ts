import { RequestHandler } from 'express'
import { AppStoreKey, Store } from '../../data-store/storageTypes'
import { CreateGameBody, createGameBodySchema } from './createGameTypes'

export const createGame: RequestHandler = async (req, res) => {
  const store = req.app.get(AppStoreKey) as Store

  let parsed: CreateGameBody
  try {
    parsed = createGameBodySchema.parse(req.body)
  } catch (error) {
    console.error(error)

    res.status(400).json({
      error: 'Incorrect Body Type',
    })
    return
  }

  try {
    const id = store.createGame({
      title: parsed.title,
    })

    res.json({ id })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}
