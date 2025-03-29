import { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { Routes } from './Routes.tsx'

export function App(): ReactElement {
  return (
    <>
      <Routes />
    </>
  )
}

const container = document.getElementById('root')

if (container == null) {
  throw new Error('Null container')
}

const root = createRoot(container)
root.render(
  <>
    <CssBaseline />
    <App />
  </>
)
