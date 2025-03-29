import { Socket } from 'socket.io'

export class PlayerSocketMap {
  playerMap: Map<string, Set<Socket>> = new Map()
  socketMap: Map<Socket, string> = new Map()

  constructor(initialMap: Record<string, Socket[]> = {}) {
    for (const [playerId, sockets] of Object.entries(initialMap)) {
      this.playerMap.set(playerId, new Set(sockets))

      for (const socket of sockets) {
        this.socketMap.set(socket, playerId)
      }
    }
  }

  addConnection(playerId: string, socket: Socket) {
    const sockets = this.playerMap.get(playerId)
    if (sockets) {
      sockets.add(socket)
    } else {
      this.playerMap.set(playerId, new Set([socket]))
    }

    this.socketMap.set(socket, playerId)
  }

  removeConnection(playerId: string, socket: Socket) {
    this.playerMap.get(playerId)!.delete(socket)
    this.socketMap.delete(socket)
  }
}