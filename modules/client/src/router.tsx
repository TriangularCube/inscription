import { createBrowserRouter } from 'react-router-dom'

import { CreateGame } from '~/pages/create-game'
import { Splash } from '~/pages/splash'

export const router = createBrowserRouter([
  {
    path: '/create-game',
    element: <CreateGame />,
  },
  {
    path: '/',
    element: <Splash />,
  },
])
