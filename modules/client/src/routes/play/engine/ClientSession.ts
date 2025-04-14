import { Dispatch, SetStateAction } from 'react'
import { io, Socket } from 'socket.io-client'
import { proxy } from 'valtio'
import { ClientGameState } from '~/routes/play/engine/ClientGameState.ts'
import { SocketMessageType } from '@inscription/server'
import { apiURL } from '~/env.ts'

export class ClientSession {
  gameState!: ClientGameState

  private socket: Socket

  constructor(
    gameId: string,
    seat: string,
    private setLoading: Dispatch<SetStateAction<boolean>>,
    private setError: Dispatch<SetStateAction<string | undefined>>
  ) {
    this.socket = io(apiURL, {
      query: {
        gameId,
        seat,
      },
    })

    this.socket.on('connect_error', () => {
      // TODO: Better Error Handling
      console.error('Connect Error')

      this.setError('Connect Error')
    })

    this.socket.on(SocketMessageType.InitialState, initialState => {
      // TODO: Sanitize Data
      this.gameState = proxy(initialState as ClientGameState)

      this.setLoading(false)
    })
  }

  cleanup() {
    this.socket.removeAllListeners()
    this.socket.disconnect()
  }
}
