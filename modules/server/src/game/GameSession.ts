import { Socket } from 'socket.io'
import { SortedBiMultiMap } from '@rimbu/bimultimap'
import { InscriptionGameStorageData } from '../store/storageTypes.js'
import { GameDetails } from '../types/GameStates.js'
import { SocketMessageType } from '../types/SocketMessageType.js'

export class GameSession {
  players: SortedBiMultiMap<string, Socket> = SortedBiMultiMap.empty()
  gameState: GameDetails

  constructor(stateFromStorage: InscriptionGameStorageData) {
    this.gameState = stateFromStorage.content
  }

  connectionEstablished(seatId: string, socket: Socket) {
    this.players.add(seatId, socket)

    console.log('Player Connected')

    // TODO: Push current state to socket
    socket.emit(SocketMessageType.InitialState, this.gameState)
  }
}
