import { z } from 'zod'

export const zodSignIn = z.object({
  username: z.string().min(2, 'Must be at least 2 characters long'),
  password: z.string().min(1, 'Password is required')
})
