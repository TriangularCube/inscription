import { z } from 'zod';
export const createGameInputSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
});
