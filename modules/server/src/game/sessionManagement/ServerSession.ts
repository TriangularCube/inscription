import { Socket } from 'socket.io'
import { PlayerConnections } from './PlayerConnections.js'
import { GameDetails } from '../../types/GameStates.js'
import { InscriptionGameStorageData } from '../../store/storageTypes.js'
import { MessageName } from '../../types/Messages.js'

export class ServerSession {
  players = new PlayerConnections(this)
  gameState: GameDetails

  constructor(stateFromStorage: InscriptionGameStorageData) {
    this.gameState = stateFromStorage.content
  }

  connectionEstablished(seatId: string, socket: Socket) {
    this.players.connectionEstablished(seatId, socket)

    console.log('Player Connected')

    socket.emit(MessageName.InitialState, this.sanitizeDataForPlayer(seatId))
  }

  private sanitizeDataForPlayer(id: string) {
    // TODO: Sanitize state for player

    return this.gameState
  }

  playerAction(seat: string, action: unknown) {}

  checkForEmpty() {
    // TODO Save game and such?
    return this.players.isEmpty()
  }
}
