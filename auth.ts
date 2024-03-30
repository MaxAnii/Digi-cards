import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

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
				// session.user.phoneNumber = token.phoneNumber;
				// session.user.image = token.image;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;
			const user = await db.user.findFirst({
				where: { id: token.sub },
			});
			if (!user) return token;

			token.email = user.email;
			token.image = user.image as string;
			token.name = user.name;
			//   token.phoneNumber = user.phoneNumber as string;

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
