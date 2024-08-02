import { createServer } from 'node:http'
import { makeApp } from './app.js'
import { port } from './env.js'

const main = async () => {
  const app = makeApp()

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  const httpServer = createServer()
  httpServer.addListener('request', app)

  httpServer.listen(port, () => {
    console.log('Listening on port 8400')
  })
}

main().catch(e => {
  console.error(e)
  process.exit(101)
})
