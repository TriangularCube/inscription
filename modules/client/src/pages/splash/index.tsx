import React, { ReactElement } from 'react'
import { Box, Button } from '@mui/joy'
import { Link } from 'react-router-dom'

export function Splash(): ReactElement {
  return (
    <Box>
      <Button component={Link} to={'/create-game'}>
        Create Game
      </Button>
    </Box>
  )
}
