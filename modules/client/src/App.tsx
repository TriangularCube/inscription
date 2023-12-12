import React, { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

function App(): ReactElement {
  return <div>Hello</div>
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
