"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { addNewSocialLinkSchema } from "@/schemas";
import { auth } from "@/auth";

export const addNewSocialLink = async (
	values: z.infer<typeof addNewSocialLinkSchema>
) => {
	try {
		const validateFields = addNewSocialLinkSchema.safeParse(values);
		if (!validateFields.success) return { message: "Invalid fields" };
		const { link } = validateFields.data;
		const session = await auth();
		if (!session?.user.id) return;
		const data = await db.socialLinks.create({
			data: {
				userId: session.user.id,
				link,
			},
		});
		if (data) {
			const newLink = await db.socialLinks.findMany({
				where: {
					userId: data.userId,
				},
			});
			return { newLink };
		}
		return { message: "Something went wrong" };
	} catch (error) {}
};
