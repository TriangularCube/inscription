import { ReactElement } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { GetRequest } from '~/utils/api.ts'

export const detailsLoader = async () => {
  const { id } = useParams<{ id: string }>()
  const gameData = await GetRequest(`/game-details/${id}`)

  if (!gameData.success) {
    throw new Error()
  }

  return { gameData: gameData.data }
}

export function GameDetails(): ReactElement {
  const data = useLoaderData()

  console.log(data)

  return <div>Game</div>
}
