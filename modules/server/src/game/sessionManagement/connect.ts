import { Server } from 'socket.io'
import { getGameSession } from './sessions.js'
import { type } from 'arktype'

const connectQuery = type({
  gameId: 'string',
  seat: 'string',
})

export const SetupConnection = (io: Server) => {
  io.use((socket, next) => {
    const parsedQuery = connectQuery(socket.handshake.query)

    if (parsedQuery instanceof type.errors) {
      console.log('Query Bad Format')
      return next(new Error('Bad Request'))
    }

    const { gameId, seat } = parsedQuery

    if (gameId == null || seat == null) {
      console.log('No ID or Seat')
      return next(new Error('No ID or Seat'))
    }

    try {
      const game = getGameSession(gameId)
      if (!game.gameState.seats.some(element => element.id === seat)) {
        console.log(`Seat ${seat} does not exist in game`)
        console.log(game.gameState)
        return next(new Error('Seat does not exist in game'))
      }
    } catch (error) {
      console.log('Game with that ID does not exist')
      return next(new Error('No Such Game'))
    }

    next()
  })

  io.on('connection', socket => {
    // Already checked previously
    const gameId = socket.handshake.query.gameId as string
    const seatId = socket.handshake.query.seatId as string

    const session = getGameSession(gameId)
    session.connectionEstablished(seatId, socket)
  })
}
