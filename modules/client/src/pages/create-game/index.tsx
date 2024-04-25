import React, { ChangeEvent, ReactElement, useState } from 'react'
import { Box, Radio, RadioGroup, Input, Button } from '@mui/joy'
import { PostRequest } from 'Utils/api'

export function CreateGame(): ReactElement {
  const [players, setPlayers] = useState<string[]>(['', '', ''])

  const handlePlayerNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(event.target.value)

    if (newNum === players.length) {
      return
    }

    if (newNum > players.length) {
      setPlayers(prev => [...players, ...Array(newNum - prev.length).fill('')])
    } else {
      setPlayers(prev => prev.slice(0, newNum))
    }
  }

  const executeCreate = async () => {
    const response = await PostRequest('/create-game', {
      body: JSON.stringify({
        title: 'ABC',
      }),
    })

    console.log(response)
  }

  return (
    <Box>
      <RadioGroup
        orientation={'horizontal'}
        value={players.length}
        onChange={handlePlayerNumChange}
      >
        {[1, 2, 3, 4].map(item => (
          <Radio key={`${item}-players`} value={item} label={item} />
        ))}
      </RadioGroup>
      {players.map((element, index) => (
        <Input
          key={`player-${index}-name`}
          placeholder={`Player ${index + 1} Name`}
          value={element}
          onChange={event => {
            setPlayers(prevState => {
              const newNames = [...prevState]
              newNames[index] = event.target.value

              return newNames
            })
          }}
        />
      ))}
      <Button onClick={executeCreate}>Create</Button>
    </Box>
  )
}
