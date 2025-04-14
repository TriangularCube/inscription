import { Socket } from 'socket.io'

export class PlayerConnectionMap {
  private readonly playerMap: Map<string, Set<Socket>> = new Map()
  private readonly socketMap: Map<Socket, string> = new Map()

  constructor(initialMap: Record<string, Socket[]> = {}) {
    for (const [id, socks] of Object.entries(initialMap)) {
      this.playerMap.set(id, new Set())

      for (const singleSocket of socks) {
        this.playerMap.get(id)!.add(singleSocket)
        this.socketMap.set(singleSocket, id)
      }
    }
  }

  addConnection(id: string, socket: Socket) {
    if (!this.playerMap.has(id)) {
      this.playerMap.set(id, new Set())
    }
    this.socketMap.set(socket, id)
  }

  removeConnection(socket: Socket) {
    const id = this.socketMap.get(socket)

    if (id != null) {
      this.playerMap.get(id)!.delete(socket)
      this.socketMap.delete(socket)
    }
  }

  isEmpty() {
    if (this.socketMap.size > 0) {
      return false
    }

    for (const [id, sockets] of this.playerMap) {
      if (sockets.size > 0) {

      }
    }
  }
}
