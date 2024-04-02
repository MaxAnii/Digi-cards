"use server";
import { db } from "@/lib/db";
import { resetSchema } from "@/schemas";
import * as z from "zod";

import { generateResetToken } from "@/lib/resetToken";
import { sendResetEmail } from "@/lib/mail";

export const sendResetToken = async (values: z.infer<typeof resetSchema>) => {
	const validateFields = resetSchema.safeParse(values);
	if (!validateFields.success) return { message: "Invalid fields" };

	const { email } = validateFields.data;

	const emailExists = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (!emailExists) return { message: "No such found" };

	const resetToken = await generateResetToken(email);
	if (resetToken.email) {
		await sendResetEmail(resetToken.email, resetToken.token);
	}
	return { message: "Reset email sent" };
};

export const getResetTokenByEmail = async (email: string) => {
	try {
		const resetToken = await db.resetToken.findFirst({
			where: { email },
		});
		return resetToken;
	} catch (error) {
		return null;
	}
};
export const getResetTokenByToken = async (token: string) => {
	try {
		const resetToken = await db.resetToken.findUnique({
			where: { token },
		});
		return resetToken;
	} catch (error) {
		return null;
	}
};
