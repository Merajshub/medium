import z from "zod"
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()

})
// type inference in zod
export type SignupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)

})

// type inference in zod
export type SigninInput = z.infer<typeof signinInput>

export const createPostInput = z.object({
    title: z.string(),
    content: z.string()
})
// type inference in zod
export type CreatePostInput = z.infer<typeof createPostInput>

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type UpdatePostType = z.infer<typeof updatePostInput>;

