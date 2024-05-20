import { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

import { type CreateGameInputType } from '@inscription/shared/src/types/create-game-types.ts'

const a = {
  title: 'forever',
  description: 'Ho'
} as CreateGameInputType

export function App(): ReactElement {
  return <div>{a.title}</div>
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
