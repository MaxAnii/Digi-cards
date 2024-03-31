"use server";
import { db } from "@/lib/db";

export const checkUsernameExists = async (username: string) => {
	try {
		const usernameExists = await db.user.findFirst({
			where: { username },
		});

		if (usernameExists) return true;

		return false;
	} catch (error) {}
};
