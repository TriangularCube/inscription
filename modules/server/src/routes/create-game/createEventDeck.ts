import { shuffle } from 'lodash-es'
import { EventCard } from '../../types/EventCards.js'
import { EventCardsSeed } from '../../game/utils/eventCardsSeed.js'

export const createEventDeck = () => {
  const deck: EventCard[] = []

  // Stage 1
  const stage1Blue = shuffle(EventCardsSeed.Stage1.Blue)
  const stage1Black = shuffle(EventCardsSeed.Stage1.Black)

  deck.push(stage1Blue.pop()!)
  deck.push(stage1Black.pop()!)
  deck.push(stage1Blue.pop()!)

  // Stage 2
  const stage2Blue = shuffle(EventCardsSeed.Stage2.Blue)
  const stage2Black = shuffle(EventCardsSeed.Stage2.Black)

  deck.push(stage2Black.pop()!)
  deck.push(stage2Blue.pop()!)
  deck.push(stage2Black.pop()!)
  deck.push(stage2Blue.pop()!)
  deck.push(stage2Black.pop()!)
  deck.push(stage2Blue.pop()!)

  // Stage 3
  const stage3Blue = shuffle(EventCardsSeed.Stage3.Blue)
  const stage3Black = shuffle(EventCardsSeed.Stage3.Black)

  deck.push(stage3Black.pop()!)
  deck.push(stage3Blue.pop()!)
  deck.push(stage3Black.pop()!)
  deck.push(stage3Blue.pop()!)
  deck.push(stage3Black.pop()!)
  deck.push(stage3Blue.pop()!)

  // Stage 4
  const stage4Blue = shuffle(EventCardsSeed.Stage4.Blue)
  const stage4Black = shuffle(EventCardsSeed.Stage4.Black)

  deck.push(stage4Black.pop()!)
  deck.push(stage4Blue.pop()!)
  deck.push(stage4Black.pop()!)
  deck.push(stage4Blue.pop()!)
  deck.push(stage4Black.pop()!)
  deck.push(stage4Blue.pop()!)

  // Stage 5
  const stage5Black = shuffle(EventCardsSeed.Stage5.Black)
  const stage5Blue = shuffle(EventCardsSeed.Stage5.Blue)

  deck.push(stage5Black.pop()!)
  deck.push(stage5Blue.pop()!)
  deck.push(stage5Black.pop()!)
  deck.push(stage5Blue.pop()!)

  return deck
}
