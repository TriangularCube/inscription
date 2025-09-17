import { ReactElement, useEffect, useMemo, useState } from 'react'
import { useParams } from 'wouter'
import { CircularProgress } from '@mui/material'
import { ClientSession } from './engine/ClientSession.ts'
import { ClientSessionContext } from '~/routes/play/ClientSessionContext.ts'
import { SelectOptions } from '~/routes/play/SelectOptions.tsx'
import { GameControlStep } from '@inscription/server'

export function Play(): ReactElement {
  const { gameId, seat } = useParams<{ gameId: string; seat: string }>()

  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(true)

  const session = useMemo(
    () => new ClientSession(gameId, seat, setLoading, setError),
    []
  )

  useEffect(() => {
    return () => {
      console.log('Play Unmounted')

      session.cleanup()
    }
  }, [])

  if (error != null) {
    return <div>Error</div>
  }

  if (session == null || loading) {
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
