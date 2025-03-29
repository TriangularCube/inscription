import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { CircularProgress } from '@mui/material'
import { ClientSession } from './engine/ClientSession.ts'
import { ClientSessionContext } from '~/routes/play/ClientSessionContext.ts'
import { SelectOptions } from '~/routes/play/SelectOptions.tsx'
import { GameControlStep } from '@inscription/server'

export function Play(): ReactElement {
  const { gameId, seat } = useParams<{ gameId: string; seat: string }>()
  const [session, setSession] = useState<ClientSession>()

  useEffect(() => {
    const newSession = new ClientSession(gameId, seat)
    setSession(newSession)

    return () => {
      console.log('Play Unmounted')

      newSession.cleanup()
    }
  }, [])

  if (!session?.loaded) {
    return <CircularProgress />
  }

  const nextScreen = (() => {
    switch (session.gameState.boardState.currentStep) {
      case GameControlStep.ConfigurationSelect:
        return <SelectOptions />
      default:
        return null
    }
  })()

  return (
    <ClientSessionContext.Provider value={session}>
      {nextScreen}
    </ClientSessionContext.Provider>
  )
}
