import { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CssBaseline } from '@mui/material'

export function App(): ReactElement {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

const container = document.getElementById('root')

if (container == null) {
  throw new Error('Null container')
}

const root = createRoot(container)
root.render(<App />)
