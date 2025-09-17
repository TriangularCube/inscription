import { Socket } from 'socket.io'
import { ServerSession } from './ServerSession.js'
import { MessageName } from '../../types/Messages.js'

export class ServerPlayer {
  private sockets = new Set<Socket>()

  constructor(
    private seatId: string,
    private session: ServerSession
  ) {}

  newConnection(socket: Socket) {
    console.log(`New socket for ${this.seatId} connected`)

    this.sockets.add(socket)
    socket.on('disconnect', () => this.handleSocketDisconnect(socket))

    socket.on(MessageName.RegisterPlayerAction, this.handlePlayerActionRegister)
  }

  handleSocketDisconnect(socket: Socket) {
    console.log(`Seat ${this.seatId} disconnected`)

    this.sockets.delete(socket)

    // TODO
  }

  handlePlayerActionRegister(data: any) {
    console.log('Player Action', data)
  }

  isEmpty() {
    return this.sockets.size === 0
  }
}
