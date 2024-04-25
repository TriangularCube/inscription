import express, { RequestHandler } from 'express'
import { AppStoreKey, Store } from '../../data-store/storageTypes'

export const details: RequestHandler = async (
  req: express.Request<{ id: string }>,
  res
) => {
  const store = req.app.get(AppStoreKey) as Store

  try {
    const gameData = store.getGameData(req.params.id)

    res.json({
      id: gameData.id,
    })
  } catch (error) {
    if (error.cause?.code === 'GAME_NOT_FOUND') {
      res.status(404).json({ error: 'Not Found' })
    } else {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
