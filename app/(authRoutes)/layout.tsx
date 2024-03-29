import NavbarContainer from "@/components/NavbarContainer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<NavbarContainer>
				<></>
			</NavbarContainer>
			{children}
		</div>
	);
}
