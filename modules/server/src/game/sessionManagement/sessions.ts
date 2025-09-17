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

// TODO: maybe check and destroy sessions once in a while?
const checkAndDestroySessions = () => {
  for (const [id, session] of sessions.entries()) {
    if (session.checkForEmpty()) {
      sessions.delete(id)
    }
  }
}

// TODO Switch implementation to env
setInterval(checkAndDestroySessions, 60 * 60 * 1000) // 1 Hour
