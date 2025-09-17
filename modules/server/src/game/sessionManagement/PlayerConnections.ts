import { Socket } from 'socket.io'
import { ServerPlayer } from './ServerPlayer.js'
import { ServerSession } from './ServerSession.js'


export class PlayerConnections {
  private readonly players = new Map<string, ServerPlayer>()

  constructor(private session: ServerSession) {}

  connectionEstablished(seatId: string, socket: Socket) {
    let player = this.players.get(seatId)

    if (player == null) {
      player = new ServerPlayer(seatId, this.session)
      this.players.set(seatId, player)
    }

    player.newConnection(socket)
  }

  isEmpty() {
    for (const [, player] of this.players) {
      if (!player.isEmpty()) {
        return false
      }
    }

    return true
  }
}
