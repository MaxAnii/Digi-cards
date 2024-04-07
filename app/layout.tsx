import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
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
				className={cn(
					"min-h-screen bg-slate-900  antialiased",
					roboto.className
				)}
			>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
