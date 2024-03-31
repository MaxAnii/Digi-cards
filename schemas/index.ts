import * as z from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const signupSchema = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
	confrimPassword: z.string().min(8),
});
