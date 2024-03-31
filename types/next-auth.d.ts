import NextAuth, { DefaultSession } from "next-auth";
export type ExtendedUser = DefaultSession["user"] & {
	role: string;
	username: string | null;
};
declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
	interface JWT {
		role: string;
		username: string | null;
	}
}
