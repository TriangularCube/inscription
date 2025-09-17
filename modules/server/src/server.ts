import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { makeApp } from './app.js'
import { port } from './env.js'
import { corsArray } from './cors.js'
import { SetupConnection } from './game/sessionManagement/connect.js'

const main = async () => {
  const app = makeApp()

  const httpServer = createServer(app)

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
