"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import {
	S3Client,
	ListBucketsCommand,
	PutObjectCommand,
} from "@aws-sdk/client-s3";
const s3client = new S3Client({
	region: process.env.S3_REGION,
	credentials: {
		accessKeyId: process.env.S3_ACCESS_KEY || "",
		secretAccessKey: process.env.S3_SECRET_KEY || "",
	},
});
import {
	basicDetailsSchema,
	nameDescriptionSchema,
	updateSocialLinkSchema,
} from "@/schemas";
import { auth } from "@/auth";

export const updateNameDescription = async (
	values: z.infer<typeof nameDescriptionSchema>
) => {
	try {
		const session = await auth();
		if (!session?.user.id) return;
		const validateFields = nameDescriptionSchema.safeParse(values);
		if (!validateFields.success) return { message: "Invalid fields" };
		const { name, description, id } = validateFields.data;

		const data = await db.basicDetails.update({
			where: {
				userId: session?.user.id,
			},
			data: {
				name,
				bio: description,
			},
		});
		return { message: "profile updated" };
	} catch (error) {}
};

export const updatePhoto = async (
	data: FormData,
	image: "backgroundPhoto" | "profilePhoto"
) => {
	try {
		const session = await auth();
		if (!session?.user.id) return;

		const file = data.get(image) as File | null;
		if (!file) {
			throw new Error("File not found");
		}

		const arrayBuffer = await file?.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const params = {
			Bucket: process.env.S3_BUCKET_NAME,
			Key: `${image}${session.user.id}`,
			Body: buffer,
			ContentType: "image/jpg",
		};

		const command = new PutObjectCommand(params);
		const response = await s3client.send(command);
		if (response.$metadata.httpStatusCode === 200) {
			const data = await db.basicDetails.update({
				where: {
					userId: session.user.id,
				},
				data: {
					[image]: `https://digicards2.s3.eu-north-1.amazonaws.com/${image}${session.user.id}`,
				},
			});
			return {
				message: "Profile updated",
				image: `https://digicards2.s3.eu-north-1.amazonaws.com/${image}${session.user.id}`,
			};
		}
	} catch (error: any) {
		console.log(error.message);
	}
};

export const updateBasicDetails = async (
	values: z.infer<typeof basicDetailsSchema>,
	phoneCountryCode: string,
	whatsappCountryCode: string
) => {
	try {
		const validateFields = basicDetailsSchema.safeParse(values);
		if (!validateFields.success) return { message: "Invalid fields" };
		const { email, whatsappNumber, phoneNumber } = validateFields.data;
		const session = await auth();
		if (!session?.user.id) return;
		const data = await db.basicDetails.update({
			where: {
				userId: session?.user.id,
			},
			data: {
				email,
				whatsapp: whatsappNumber,
				phone: phoneNumber,
				whatsappCountryCode,
				phoneCountryCode,
			},
		});
		if (data) return { message: "Profile updated" };
		return { message: "Something went wrong" };
	} catch (error) {}
};

export const updateSocialLink = async (
	values: z.infer<typeof updateSocialLinkSchema>
) => {
	try {
		const validateFields = updateSocialLinkSchema.safeParse(values);
		if (!validateFields.success) return { message: "Invalid fields" };
		const { id, link } = validateFields.data;
		const session = await auth();
		if (!session?.user.id) return;
		const data = await db.socialLinks.update({
			where: {
				id,
				userId: session.user.id,
			},
			data: {
				link,
			},
		});
		if (data) {
			const updateLinks = await db.socialLinks.findMany({
				where: {
					userId: data.userId,
				},
			});
			return { updateLinks };
		}

		return { message: "Something went wrong" };
	} catch (error) {}
};
export const deleteSocialLink = async (id: string) => {
	try {
		const session = await auth();
		if (!session?.user.id) return;
		const data = await db.socialLinks.delete({
			where: {
				id,
				userId: session.user.id,
			},
		});
		if (data) {
			const updateLinks = await db.socialLinks.findMany({
				where: {
					userId: data.userId,
				},
			});
			return { updateLinks };
		}

		return { message: "Something went wrong" };
	} catch (error) {}
};

export const getdata = async (image: "backgroundPhoto" | "profilePhoto") => {
	try {
		const session = await auth();
		if (!session?.user.id) return;
		const data = await db.basicDetails.findFirst({
			where: {
				userId: session?.user.id,
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
