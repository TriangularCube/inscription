import { z } from 'zod'

export const createGameBodySchema = z.object({
  title: z.string(),
})

export type CreateGameBody = z.infer<typeof createGameBodySchema>
