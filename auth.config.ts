import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

import google from "next-auth/providers/google";
export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validateFields = loginSchema.safeParse(credentials);
				if (validateFields.success) {
					const { email, password } = validateFields.data;
					const user = await db.user.findUnique({
						where: {
							email,
						},
					});
					if (!user || !user.password) return null;
					const passwordMatch = await bcrypt.compare(password, user.password);
					if (passwordMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
