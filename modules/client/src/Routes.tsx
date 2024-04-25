import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Splash } from './pages/splash'
import { CreateGame } from './pages/create-game'
import { Details } from './pages/details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/create-game',
    element: <CreateGame />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
])
