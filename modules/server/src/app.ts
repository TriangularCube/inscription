import express from 'express'
import cors from 'cors'

export const makeApp = () => {
  const app = express()

  const corsMiddleware = cors({
    origin: '*', // TODO
  })

  app.use(corsMiddleware)
  app.use(express.json())

  // const store =

  return app
}
