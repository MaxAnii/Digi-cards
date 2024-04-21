import * as z from "zod";

export const resetSchema = z.object({
	email: z.string().email(),
});
export const resetPasswordSchema = z.object({
	password: z.string().min(8),
});
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

export const nameDescriptionSchema = z.object({
	id: z.string(),
	name: z.string().min(4),
	description: z.string().min(5).max(200),
});

export const basicDetailsSchema = z.object({
	phoneNumber: z.string().min(5),
	whatsappNumber: z.string().min(5),
	email: z.string().email(),
});

export const updateSocialLinkSchema = z.object({
	id: z.string(),
	link: z.string().regex(/^https:\/\/\S+$/, {
		message: "Link must start with 'https://' and not contain spaces",
	}),
});
export const addNewSocialLinkSchema = z.object({
	link: z.string().regex(/^https:\/\/\S+$/, {
		message: "Link must start with 'https://' and not contain spaces",
	}),
});
export const updatePasswordSchema = z.object({
	password: z.string().min(8),
});
export const updateEmailSchema = z.object({
	email: z.string().min(8),
});
