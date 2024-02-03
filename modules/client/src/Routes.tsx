import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Splash } from './pages/splash'
import { CreateGame } from './pages/create-game'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/create-game',
    element: <CreateGame />,
  },
])
