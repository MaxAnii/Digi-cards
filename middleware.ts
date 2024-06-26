import authConfig from "@/auth.config";
import NextAuth from "next-auth";
export const { auth } = NextAuth(authConfig);
import {
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
	apiAuthPrefix,
	authRoutes,
	protectedRoutes,
} from "@/routes";

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	// const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
	if (isApiAuthRoute) {
		return;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return;
	}
	if (!isLoggedIn && isProtectedRoute) {
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
	}
	return;
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
