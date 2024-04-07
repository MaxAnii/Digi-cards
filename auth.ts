import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
// console.log("auth", process.env.AUTH_SECRET);
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/signIn",
		error: "/error",
	},

	callbacks: {
		async signIn({ user, account }) {
			if (account?.provider !== "credentails") return true;
			const existingUser = await db.user.findUnique({
				where: { id: user.id },
			});
			if (!existingUser?.emailVerified) return false;
			return true;
		},

		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
				session.user.role = token.role;
				session.user.username = token.username;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;
			const user = await db.user.findFirst({
				where: { id: token.sub },
			});
			if (!user) return token;
			token.username = user.username;
			token.role = user.role;
			token.email = user.email;
			token.image = user.image as string;
			token.name = user.name;

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
	secret: "C0Xjy84+JicuBJZSttRNeB+FIh78VLAjDrHFtnxk0RQ=",
});
