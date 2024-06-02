import { createServer } from 'node:http'
import * as process from 'node:process'

import { port } from './env'

const main = async () => {
  const httpServer = createServer()

  httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main().catch(e => {
  console.error(e)
  process.exit(101)
})
