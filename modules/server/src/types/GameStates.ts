import { EventCard } from './EventCards.js'
import { GameControlStep } from './GameControlStep.js'

export interface GameDetails {
  seats: GameSeat[]
  eventCardDeck: EventCard[]
  boardState: ConfigurationSettingBoardState | MatchBoardState
}

export interface GameSeat {
  id: string
  name: string
}

interface ConfigurationSettingBoardState {
  currentStep: GameControlStep.ConfigurationSelect
  playerStatus: Record<string, boolean>
}

interface MatchBoardState {
  currentStep: GameControlStep.Match
  MecatolRex: []
}
