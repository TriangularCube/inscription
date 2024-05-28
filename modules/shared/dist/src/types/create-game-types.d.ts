import { z } from 'zod';
export declare const createGameInputSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    author: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description?: string;
    title?: string;
    author?: string;
}, {
    description?: string;
    title?: string;
    author?: string;
}>;
export type CreateGameInputType = z.infer<typeof createGameInputSchema>;
