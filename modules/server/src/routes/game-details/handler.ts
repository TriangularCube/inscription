import { RequestHandler } from 'express'
import { store } from '../../store/store.js'

export const gameDetails: RequestHandler = async (req, res) => {
  const id = req.params.id

  try {
    const game = store.getGame(id)

    res.json({
      seats: game.content.seats,
    })
  } catch (error) {
    res.status(404).json({
      error: {
        code: 'No Such Game',
        message: 'No Such Game',
      },
    })
  }
}
