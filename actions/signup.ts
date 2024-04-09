"use server";
import { signupSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificatonEmail } from "@/lib/mail";
import { checkUsernameExists } from "./checkUsername";
export const signup = async (values: z.infer<typeof signupSchema>) => {
	const validateFields = signupSchema.safeParse(values);
	if (!validateFields.success) return { message: "Invalid fields" };

	const { email, password, username } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	const usernameExists = await checkUsernameExists(username);

	if (usernameExists) return { message: "User name already exists" };
	const existUser = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (existUser) return { message: "Email already in use" };

	const newUser = await db.user.create({
		data: {
			username,
			email,
			password: hashedPassword,
			role: "admin",
		},
	});
	await db.basicDetails.create({
		data: {
			userId: newUser.id,
			name: username,
			email,
		},
	});
	const verificationToken = await generateVerificationToken(email);
	if (verificationToken.email) {
		await sendVerificatonEmail(
			verificationToken.email,
			verificationToken.token
		);
	}
	return { message: "Verification email sent" };
};
