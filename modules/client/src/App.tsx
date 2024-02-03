import React, { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/inter'
import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'

function App(): ReactElement {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
