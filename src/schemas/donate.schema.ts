import { z } from 'zod'

export const donateSchema = z.object({
	email: z.string().email(),
	amount: z.number().min(1)
})

export type DonateSchema = z.infer<typeof donateSchema>
