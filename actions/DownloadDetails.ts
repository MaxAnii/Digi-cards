"use server";
import { db } from "@/lib/db";

export const getUserDetailsToDownload = async (userId: string) => {
	try {
		const userData = await db.basicDetails.findFirst({
			where: {
				userId,
			},
			select: {
				whatsappCountryCode: true,
				whatsapp: true,
				phoneCountryCode: true,
				phone: true,
				name: true,
				email: true,
			},
		});
		return userData;
	} catch (error) {}
};
