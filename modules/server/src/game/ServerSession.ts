import { Socket } from 'socket.io'
import { InscriptionGameStorageData } from '../store/storageTypes.js'
import { GameDetails } from '../types/GameStates.js'
import { SocketMessageType } from '../types/SocketMessageType.js'
import { PlayerConnectionMap } from './utils/PlayerConnectionMap.js'

export class ServerSession {
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

      // TODO: deal with cleaning up the Session if
      //    it's empty
    })

    socket.on(SocketMessageType.RegisterAction, this.handlePlayerActionRegister)

    socket.emit(
      SocketMessageType.InitialState,
      this.sanitizeDataForPlayer(seatId)
    )
  }

  handlePlayerActionRegister(data: any) {
    console.log('Player Action', data)
  }

  private sanitizeDataForPlayer(id: string) {
    // TODO: Sanitize state for player

    return this.gameState
  }
}
