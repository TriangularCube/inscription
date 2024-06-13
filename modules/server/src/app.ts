import express from 'express'
import cors from 'cors'

export const makeApp = () => {
  const app = express()

  const corsMiddleware = cors({
    origin: '*',
  })

  app.use(corsMiddleware)
  app.use(express.json())

  app.get('/hello', (req, res) => {
    res.send('Hi')
  })

  return app
}
