import { GameSession } from './GameSession.js'
import { store } from '../store/index.js'

const sessions: { [gameId: string]: GameSession } = {}

export const getGameSession = (gameId: string) => {
  if (sessions[gameId] != null) {
    return sessions[gameId]
  }

  const data = store.getGame(gameId)
  sessions[gameId] = new GameSession(data)

  return sessions[gameId]
}
