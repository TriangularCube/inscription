import { corsList } from './env.js'

export const corsArray = (() => {
  if (corsList == null || corsList.length < 1) {
    return []
  }

  return corsList
})()
