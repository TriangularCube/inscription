import { ServerSession } from './ServerSession.js'
import { store } from '../store/index.js'

const sessions: Map<string, ServerSession> = new Map()

export const getGameSession = (gameId: string) => {
  if (sessions.has(gameId)) {
    return sessions.get(gameId)!
  }

  const data = store.getGame(gameId)
  const newSession = new ServerSession(data)

  sessions.set(gameId, newSession)

  return newSession
}
