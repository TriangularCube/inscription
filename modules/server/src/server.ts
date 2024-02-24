import { createServer } from 'node:http'
import { port } from './env'
import { makeApp } from './app'

const main = async () => {
  const app = await makeApp()

  const httpServer = createServer()

  httpServer.addListener('request', app)

  httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main().catch(e => {
  console.error('Fatal error occurred starting server!')
  console.error(e)
  process.exit(101)
})
