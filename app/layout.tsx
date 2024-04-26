import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "DigiCard",
	description: "Establish your digital presence",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<html lang="en">
			<body
				className={cn("min-h-screen  antialiased", roboto.className)}
				// "min-h-screen   antialiased",
			>
				<Toaster />
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	);
}
