import { Socket } from 'socket.io'
import { InscriptionGameStorageData } from '../store/storageTypes.js'
import { GameDetails } from '../types/GameStates.js'
import { SocketMessageType } from '../types/SocketMessageType.js'
import { PlayerConnectionMap } from './utils/PlayerConnectionMap.js'

export class GameSession {
  players: PlayerConnectionMap = new PlayerConnectionMap()
  gameState: GameDetails

  constructor(stateFromStorage: InscriptionGameStorageData) {
    this.gameState = stateFromStorage.content
  }

  connectionEstablished(seatId: string, socket: Socket) {
    this.players.addConnection(seatId, socket)

    console.log('Player Connected')

    socket.on('disconnect', () => {
      this.players.removeConnection(socket)
    })

    // TODO: Push current state to socket
    socket.emit(SocketMessageType.InitialState, this.gameState)
  }
}
