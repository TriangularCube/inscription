import { InscriptionGameCreateData } from '../../data-store/storageTypes.js'
import ShortUniqueId from 'short-unique-id'
import { GameSteps } from '@inscription/common/gameplay'
import { createEventDeck } from './createEventDeck.js'

const generatePlayerId = new ShortUniqueId({ length: 2 })

export const createNewGameState = (
  players: string[]
): InscriptionGameCreateData => {
  const seatingData: InscriptionGameCreateData['players'] = []

  players.forEach(element => {
    seatingData.push({
      id: generatePlayerId.rnd(),
      name: element,
    })
  })

  // TODO: Change based on game configuration
  const currentStep = GameSteps.ConfigurationSelect

  return {
    players: seatingData,
    eventCardDeck: createEventDeck(),
    boardState: {
      currentStep: currentStep,
      currentRound: 0,
      MecatolRex: [],
    },
  }
}
