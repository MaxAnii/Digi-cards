"use server";
import { signupSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
// import { generateVerificationToken } from "@/lib/tokens";
// import { sendVerificatonEmail } from "@/lib/mail";
export const signup = async (values: z.infer<typeof signupSchema>) => {
	const validateFields = signupSchema.safeParse(values);
	if (!validateFields.success) return { error: "error" };

	const { email, password } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	const existUser = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (existUser) return { error: "Email already in use" };

	await db.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});
	//   const verificationToken = await generateVerificationToken(email);
	//   if (verificationToken.email) {
	//     await sendVerificatonEmail(
	//       verificationToken.email,
	//       verificationToken.token,
	//     );
	//   }
	return { success: "auth" };
};
