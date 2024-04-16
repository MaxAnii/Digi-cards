"use server";
import { db } from "@/lib/db";

export const getUserIdByUsername = async (username: string) => {
	try {
		const data = await db.user.findFirst({
			where: {
				username,
			},
			select: {
				id: true,
			},
		});
		return data?.id;
	} catch (error) {}
};

export const getPhoto = async (
	userId: string,
	image: "backgroundPhoto" | "profilePhoto"
) => {
	try {
		const data = await db.basicDetails.findFirst({
			where: {
				userId,
			},
			select: {
				[image]: true,
			},
		});

		return data;
	} catch (error: any) {
		console.log(error.message);
	}
};

export const getNameDescription = async (userId: string) => {
	try {
		const data = await db.basicDetails.findUnique({
			where: {
				userId,
			},
			select: {
				name: true,
				bio: true,
			},
		});
		return data;
	} catch (error) {}
};

export const getMainLinks = async (userId: string) => {
	try {
		const data = await db.basicDetails.findUnique({
			where: {
				userId,
			},
			select: {
				phone: true,
				whatsapp: true,
				email: true,
				whatsappCountryCode: true,
				phoneCountryCode: true,
			},
		});
		return data;
	} catch (error) {}
};

export const getSocialLinks = async (userId: string) => {
	try {
		const data = await db.socialLinks.findMany({
			where: {
				userId,
			},
		});

		return data;
	} catch (error) {}
};

export const getAllInformation = async (id: string) => {
	try {
		const data = await db.user.findFirst({
			where: { id },
			select: {
				BasicDetails: true,
			},
		});
		return data;
	} catch (error: any) {
		console.log(error.message);
	}
};
