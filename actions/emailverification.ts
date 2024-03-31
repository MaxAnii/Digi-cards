"use server";
import { db } from "@/lib/db";
import { getVerificationTokenByToken } from "@/verification-token";

export const newVerification = async (token: string) => {
	const existingToken = await getVerificationTokenByToken(token);
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
		if (!existingUser) {
			return { message: "Email does not exists" };
		}
		await db.user.update({
			where: {
				id: existingUser.id,
			},
			data: {
				emailVerified: new Date(),
				email: existingToken.email,
			},
		});
		await db.verificationToken.delete({
			where: {
				id: existingToken.id,
			},
		});
	}
	return {
		message: "verified",
	};
};
