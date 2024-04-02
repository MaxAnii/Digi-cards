"use server";
import { db } from "@/lib/db";
import { getResetTokenByToken } from "@/actions/reset-token";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { resetPasswordSchema } from "@/schemas";
export const resetPassword = async (
	values: z.infer<typeof resetPasswordSchema>,
	token: string | null
) => {
	if (!token) return { message: "Token is missing" };
	const validatefileds = resetPasswordSchema.safeParse(values);
	if (!validatefileds.success)
		return {
			message: "Invalid fields",
		};
	const { password } = validatefileds.data;

	const existingToken = await getResetTokenByToken(token);
	if (!existingToken) {
		return {
			message: "Token does not exists!",
		};
	}
	const hasExpired = new Date(existingToken.expirers) < new Date();

	if (hasExpired) {
		return {
			message: "Token has expired",
		};
	}
	if (existingToken.email) {
		const existingUser = await db.user.findUnique({
			where: {
				email: existingToken.email,
			},
		});
		const hashedPassword = await bcrypt.hash(password, 10);
		await db.user.update({
			where: {
				id: existingUser?.id,
			},
			data: {
				password: hashedPassword,
			},
		});
		await db.resetToken.delete({
			where: {
				id: existingToken.id,
			},
		});
	}
	return {
		message: "Password updated",
	};
};
