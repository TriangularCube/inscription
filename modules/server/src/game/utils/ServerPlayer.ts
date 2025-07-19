import { Socket } from 'socket.io'
import { GameDetails } from '../../types/GameStates.js'

export class ServerPlayer {
  private sockets = new Set<Socket>()

  constructor(
    private seatId: string,
    private gameState: GameDetails
  ) {}

  newConnection(socket: Socket) {
    console.log(`New socket for ${this.seatId} connected`)

    this.sockets.add(socket)
    socket.on('disconnect', () => this.handleSocketDisconnect(socket))
  }

  handleSocketDisconnect(socket: Socket) {
    console.log(`Seat ${this.seatId} disconnected`)

    this.sockets.delete(socket)

    // TODO
  }

  isEmpty() {
    return this.sockets.size === 0
  }
}
