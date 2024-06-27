import { createServer } from 'node:http'
import * as process from 'node:process'

import { port } from './env.js'
import { makeApp } from './app.js'

const main = async () => {
  const app = makeApp()

  const httpServer = createServer()

  httpServer.addListener('request', app)

  httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main().catch(e => {
  console.error(e)
  process.exit(101)
})
