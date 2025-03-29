import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { PostRequest } from '~/utils/api.ts'
import { useLocation } from 'wouter'

export function Create(): ReactElement {
  const [isCreating, setIsCreating] = useState(false)
  const [players, setPlayers] = useState<string[]>(['', '', ''])

  const [_, navigate] = useLocation()

  const handlePlayerNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt((event.target as HTMLInputElement).value)

    if (newNum > players.length) {
      setPlayers(prev => [
        ...players,
        ...Array<string>(newNum - prev.length).fill(''),
      ])
    } else if (newNum < players.length) {
      setPlayers(prev => prev.slice(0, newNum))
    }
  }

  const handleCreateGame = async (event: FormEvent) => {
    event.preventDefault()

    setIsCreating(true)
    const response = await PostRequest<{ id: string }>('/create-game', {
      body: JSON.stringify({
        players,
      }),
    })

    if (!response.success) {
      // TODO
      setIsCreating(false)
    } else {
      navigate(`/game/${response.data.id}`)
    }
  }

  return (
    <Box
      component={'form'}
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleCreateGame}
    >
      <FormControl disabled={isCreating}>
        <FormLabel id={'num-players-radio-label'}>Number Of Players</FormLabel>

        <RadioGroup
          row
          aria-labelledby={'num-players-radio-label'}
          name={'num-players-radio-group'}
          value={players.length}
          onChange={handlePlayerNumChange}
        >
          {[1, 2, 3, 4].map(item => (
            <FormControlLabel
              key={`player-count-${item}`}
              value={item}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {players.map((element, index) => (
        <TextField
          key={`player-${index + 1}-name`}
          required
          disabled={isCreating}
          value={element}
          id={`player-${index + 1}-name`}
          label={`Player ${index + 1}`}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPlayers(prev => {
              const newNames: string[] = [...prev]
              newNames[index] = (event.target as HTMLInputElement).value

              return newNames
            })
          }}
        />
      ))}

      <Button
        variant={'outlined'}
        sx={{ mt: 2 }}
        type={'submit'}
        loading={isCreating}
      >
        Create
      </Button>
    </Box>
  )
}
