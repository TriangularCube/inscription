import ShortUniqueId from 'short-unique-id'
import { GameDetails } from '../../types/GameStates.js'
import { GameControlStep } from '../../types/GameControlStep.js'
import { createEventDeck } from './createEventDeck.js'

const generatePlayerId = new ShortUniqueId({ length: 2 })

export const createNewGameState = (players: string[]): GameDetails => {
  const seatingData = players.map(element => ({
    id: generatePlayerId.rnd(),
    name: element,
  }))

  // TODO: Handle automatic setup
  const currentStep = GameControlStep.ConfigurationSelect

  return {
    seats: seatingData,
    eventCardDeck: createEventDeck(),
    boardState: {
      currentControlStep: currentStep,
      playerStatus: {},
      MecatolRex: [],
    },
  }
}
