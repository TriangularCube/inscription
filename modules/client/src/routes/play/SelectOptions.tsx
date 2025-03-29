import { ReactElement, useContext, useEffect } from 'react'
import { ClientSessionContext } from '~/routes/play/ClientSessionContext.ts'
import { useSnapshot } from 'valtio/react'

export function SelectOptions(): ReactElement {
  const state = useContext(ClientSessionContext).gameState
  const snapshot = useSnapshot(state)

  useEffect(() => {
    console.log(snapshot.boardState)
  }, [snapshot.boardState])

  return <div>Options</div>
}
