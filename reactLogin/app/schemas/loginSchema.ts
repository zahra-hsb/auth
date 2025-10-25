import * as z from "zod";


const LoginSchema = z.object({
    email: z.email().nonempty({ error: "Input your email" }),
    password: z.string().nonempty({ error: "Input your password" }).min(8, 'Password must be at least 8 characters long')
        .max(16, 'Password must be less than 16 characters'),
})

export { LoginSchema }