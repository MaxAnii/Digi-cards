import { getResetTokenByEmail } from "@/actions/reset-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";

export const generateResetToken = async (email: string) => {
	const token = uuidv4();
	const expires = new Date(new Date().getTime() + 3600 * 1000);

	const existingToken = await getResetTokenByEmail(email);
	if (existingToken) {
		await db.resetToken.delete({
			where: {
				id: existingToken.id,
			},
		});
	}

	const resetToken = await db.resetToken.create({
		data: {
			email: email,
			token: token,
			expirers: expires,
		},
	});
	return resetToken;
};
