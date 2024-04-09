"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { updateEmailSchema, updatePasswordSchema } from "@/schemas";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
const checkEmailExists = async (email: string) => {
	try {
		const emailExists = await db.user.findFirst({
			where: {
				email,
			},
		});
		if (emailExists) return true;
		return false;
	} catch (error) {}
};
export const updateEmail = async (
	values: z.infer<typeof updateEmailSchema>
) => {
	try {
		const session = await auth();
		if (!session?.user.id) return;
		const validateFileds = updateEmailSchema.safeParse(values);
		if (!validateFileds.success) return { message: "Invalid fields" };
		const { email } = validateFileds.data;
		const emailExists = await checkEmailExists(email);
		if (!emailExists) {
			await db.user.update({
				where: {
					id: session?.user.id,
				},
				data: {
					email,
				},
			});
			return { message: "Email updated" };
		}
		return { message: "Email already in use" };
	} catch (error) {}
};

export const updatePassword = async (
	values: z.infer<typeof updatePasswordSchema>
) => {
	try {
		const session = await auth();
		if (!session?.user.id) return;
		const validateFileds = updatePasswordSchema.safeParse(values);
		if (!validateFileds.success) return { message: "Invalid fields" };
		const { password } = validateFileds.data;
		const hashedPassword = await bcrypt.hash(password, 10);
		const data = await db.user.update({
			where: {
				id: session?.user.id,
			},
			data: {
				password: hashedPassword,
			},
		});
		if (data) return { message: "Password updated" };
		return { message: "Something went wrong" };
	} catch (error) {}
};
