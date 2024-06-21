import { ReactElement } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Splash(): ReactElement {
  const navigate = useNavigate()

  return (
    <div>
      <Button
        variant={'outlined'}
        onClick={() => {
          navigate('/create-game')
        }}
      >
        Create Game
      </Button>

      {[<div />, <div />, <div />]}
    </div>
  )
}
