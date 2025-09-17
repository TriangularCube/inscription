import { GameAction } from './GameActions.js'

interface RandomConfigurationData {
  faction: string // TODO
}

type ConfigureActionMessage = {
  type: GameAction.Configure
  data: RandomConfigurationData
}

export type GameActionMessage = ConfigureActionMessage
