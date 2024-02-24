import express, { RequestHandler } from 'express'

export const createGame: RequestHandler = async (
  req: express.Request<null, null, { data: string }>,
  res
) => {
  console.log('Req', req.body.data)

  res.json({
    id: 'abc',
  })
}
