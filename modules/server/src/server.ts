import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { makeApp } from './app.js'
import { port } from './env.js'
import { SetupConnection } from './game/connect.js'
import { corsArray } from './cors.js'

const main = async () => {
  const app = makeApp()

  const httpServer = createServer(app)
  // httpServer.addListener('request', app)

  const io = new Server(httpServer, {
    serveClient: false,
    cors: {
      origin: corsArray,
    },
  })
  SetupConnection(io)

  httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main().catch(e => {
  console.error(e)
  process.exit(101)
})
