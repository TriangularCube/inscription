import { ReactElement, useContext, useEffect } from 'react'
import { ClientSessionContext } from '~/routes/play/ClientSessionContext.ts'
import { useSnapshot } from 'valtio/react'
import { Button, Stack } from '@mui/material'

export function SelectOptions(): ReactElement {
  const session = useContext(ClientSessionContext)
  const snapshot = useSnapshot(session.gameState)

  useEffect(() => {
    console.log(snapshot.boardState)
  }, [snapshot.boardState])

  const handleSelect = () => {
    session.registerAction('Some Action')
  }

  return (
    <Stack>
      <Button onClick={handleSelect}>Ready</Button>
    </Stack>
  )
}
