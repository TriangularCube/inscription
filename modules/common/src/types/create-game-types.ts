import { z } from 'zod'

export const playerNamesSchema = z.string().min(3).array().min(2).max(8)
export type PlayerNamesType = z.infer<typeof playerNamesSchema>

export const createGameInputSchema = z.string().array().max(8).min(2)

export type CreateGameInputType = z.infer<typeof createGameInputSchema>
