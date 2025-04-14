import { GameSession } from './GameSession.js'
import { store } from '../store/index.js'

const sessions: Map<string, GameSession> = new Map()

export const getGameSession = (gameId: string) => {
  if (sessions.has(gameId)) {
    return sessions.get(gameId)!
  }

  const data = store.getGame(gameId)
  const newSession = new GameSession(data)

  sessions.set(gameId, newSession)

  return newSession
}
