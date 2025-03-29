import { ReactElement, useEffect, useState } from 'react'
import { GetRequest } from '~/utils/api.ts'
import { useParams, Link as RouterLink } from 'wouter'
import { Box, CircularProgress, Link, Stack, Typography } from '@mui/material'

interface GameDetailResponse {
  seats: { id: string; name: string }[]
}

export function Game(): ReactElement {
  const { id: gameId } = useParams<{ id: string }>()
  const [gameData, setGameData] = useState<GameDetailResponse>()

  useEffect(() => {
    void GetRequest(`/game-details/${gameId}`).then(response => {
      if (!response.success) {
        // TODO: Handle better
        console.error(response.error)
        return
      }

      const data = response.data as GameDetailResponse

      setGameData(data)
    })
  }, [])

  if (gameData == null) {
    return <CircularProgress />
  }

  return (
    <Stack sx={{ m: 2 }} spacing={2}>
      <Typography>Seats</Typography>

      {gameData.seats.map(element => (
        <Box key={element.id}>
          <Link component={RouterLink} href={`/play/${gameId}/${element.id}`}>
            {element.name}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}
