import { GameControlStep } from '@inscription/server'

export interface ClientGameState {
  boardState: {
    currentStep: GameControlStep
    MecatolRex: []
  }
  seats: Record<string, ClientSeat>
}

interface ClientSeat {
  boards: {
    exploration: {
      1: boolean
    }
  }
  history: []
}
