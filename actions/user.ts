"use server";
import { db } from "@/lib/db";

export const getUsersList = async () => {
	try {
		const users = await db.user.findMany({
			where: {
				NOT: {
					role: "admin",
				},
			},
			select: {
				id: true,
				name: true,
				username: true,
				email: true,
				image: true,
			},
		});
		console.log(users);
		return users;
	} catch (error) {}
};

export const deleteUser = async (id: string) => {
	try {
		const data = await db.user.delete({
			where: { id },
		});
		return data;
	} catch (error) {}
};
