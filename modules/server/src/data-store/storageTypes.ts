export interface InscriptionGameCreateData {
  title: string
}

export interface InscriptionGameStorageData {
  id: string
  content: {}
}

export interface Store {
  createGame(state: InscriptionGameCreateData): string
  getGameData(id: string): InscriptionGameStorageData
}

export const AppStoreKey = 'store'
