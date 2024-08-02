import { createBrowserRouter } from 'react-router-dom'

import { CreateGame } from '~/pages/create-game'
import { Splash } from '~/pages/splash'
import { detailsLoader, GameDetails } from '~/pages/game-details'

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
    path: '/game/:id',
    element: <GameDetails />,
    loader: detailsLoader,
  },
])
