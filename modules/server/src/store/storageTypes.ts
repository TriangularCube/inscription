import { GameDetails } from '../types/GameStates.js'

export interface InscriptionGameStorageData {
  id: string
  content: GameDetails
}

export interface Store {
  createGame(state: GameDetails): string
  getGame(id: string): InscriptionGameStorageData
}
