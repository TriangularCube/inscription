export interface InscriptionGameStorageContent {
  title: string
}

export interface InscriptionStorageState {

}

export interface Store {
  createGame(state: InscriptionGameStorageContent): string;
}