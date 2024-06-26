import { ChangeEvent, ReactElement, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
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
import { PostRequest } from '~/utils/api'

export function CreateGame(): ReactElement {
  // const navigate = useNavigate()

  const [players, setPlayers] = useState<string[]>(['', '', ''])

  const handlePlayerNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt((event.target as HTMLInputElement).value)

    if (newNum === players.length) {
      return
    }

    if (newNum > players.length) {
      setPlayers(prev => [
        ...players,
        ...Array<string>(newNum - prev.length).fill(''),
      ])
    } else {
      setPlayers(prev => prev.slice(0, newNum))
    }
  }

  const handleGameCreate = async () => {
    const result = await PostRequest('/create-game', {
      body: JSON.stringify(players),
    })

    console.log(result)
  }

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel id={'num-players-radio-label'}>
            Number of players
          </FormLabel>

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

          {players.map((element, index) => (
            <TextField
              key={`player-${index + 1}-name`}
              required
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
        </FormControl>
      </Box>
      <Button onClick={handleGameCreate}>Create Game</Button>
    </>
  )
}
