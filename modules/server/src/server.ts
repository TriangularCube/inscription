import { makeApp } from './app'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const main = async () => {
  const app = makeApp()

  app.get('/', (_, res) => {
    res.send('Hello World!')
  })

  const httpServer = createServer()
  httpServer.addListener('request', app)

  const io = new Server(httpServer, {
    serveClient: false,
    cors: {
      origin: 'http://localhost:1234',
    }
  })

  httpServer.listen()
}

main().catch(e => {
  console.error(e)
  process.exit(101)
})