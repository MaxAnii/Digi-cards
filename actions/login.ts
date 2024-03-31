"use server";
import { loginSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificatonEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof loginSchema>) => {
	const validateFields = loginSchema.safeParse(values);
	if (!validateFields.success) return { error: "no match" };
	const { email, password } = validateFields.data;
	const existingUser = await db.user.findFirst({
		where: { email },
	});
	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { message: "Email does not exist!" };
	}
	if (!existingUser.emailVerified) {
		const verficationToken = await generateVerificationToken(
			existingUser.email
		);
		if (verficationToken.email) {
			await sendVerificatonEmail(
				verficationToken.email,
				verficationToken.token
			);
		}
		return { message: "Confrimation Email Sent!" };
	}

	try {
		await signIn("credentials", {
			email,
			password,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return {
						message: "Invalid credentials",
					};
				default:
					return {
						message: "something went wrong",
					};
			}
		}
		throw error;
	}
};
