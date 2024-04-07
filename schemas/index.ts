import { Description } from "@radix-ui/react-dialog";
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
	name: z.string(),
	description: z.string(),
});

export const basicDetailsSchema = z.object({
	phoneNumber: z.string(),
	whatsappNumber: z.string(),
	email: z.string().email(),
});

export const updateSocialLinkSchema = z.object({
	id: z.string(),
	link: z.string(),
});
export const addNewSocialLinkSchema = z.object({
	link: z.string(),
});
export const userPhotoSchema = z.object({
	// photo : z.defaultErrorMap()
});
