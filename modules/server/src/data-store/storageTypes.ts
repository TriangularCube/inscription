import { GameSteps, EventCard } from '@inscription/common/gameplay'

export interface InscriptionGameCreateData {
  players: {
    id: string
    name: string
  }[]
  eventCardDeck: EventCard[]
  boardState: {
    currentStep: GameSteps
    currentRound: number
    MecatolRex: []
  }
}

export interface InscriptionGameStorageData {
  id: string
  content: Record<string, any> // TODO
}

export interface Store {
  createGame(state: InscriptionGameCreateData): string
  getGame(id: string): InscriptionGameStorageData
}

export const AppStoreKey = 'store'
