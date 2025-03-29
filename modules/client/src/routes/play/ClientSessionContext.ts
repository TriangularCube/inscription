import { createContext } from 'react'
import { ClientSession } from '~/routes/play/engine/ClientSession.ts'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ClientSessionContext = createContext<ClientSession>()
