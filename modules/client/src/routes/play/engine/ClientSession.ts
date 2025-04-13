import { io, Socket } from 'socket.io-client'
import { proxy } from 'valtio/vanilla'
import { ClientGameState } from '~/routes/play/engine/ClientGameState.ts'
import { SocketMessageType } from '@inscription/server'

export class ClientSession {
  gameState = proxy<ClientGameState>()

  private socket: Socket

  constructor(gameId: string, seat: string) {
    this.socket = io('http://localhost:8300', {
      query: {
        gameId,
        seat,
      },
    })

    this.socket.on('connect', () => {
      console.log('Connected to the server')
    })

    this.socket.on('connect_error', () => {
      // TODO: Better Error Handling
      console.error('Connect Error')
    })

    this.socket.on(SocketMessageType.InitialState, (...data) => {
      console.log(data)
    })
  }

  cleanup() {
    this.socket.removeAllListeners()
    this.socket.disconnect()
  }
}
