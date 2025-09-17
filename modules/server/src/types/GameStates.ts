import { EventCard } from './EventCards.js'
import { GameControlStep } from './GameControlStep.js'
import { PlayerFaction } from './PlayerFactions.js'

export interface GameDetails {
  seats: GameSeat[]
  eventCardDeck: EventCard[]
  boardState: BoardState
}

export interface GameSeat {
  id: string
  name: string
}

interface PlayerData {
  ready: boolean
  faction: PlayerFaction
}

interface BoardState {
  currentControlStep: GameControlStep
  playerStatus: Record<string, PlayerData>
  MecatolRex: []
}
