import AuthButtons from "@/components/AuthButtons";
import NavbarContainer from "@/components/NavbarContainer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="auth-background h-screen">
			<NavbarContainer>
				<AuthButtons></AuthButtons>
			</NavbarContainer>
			{children}
		</div>
	);
}
