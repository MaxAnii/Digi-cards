import Link from "next/link";
import ThemeToggleDropdown from "./ThemeToggleDropdown";
import { Card } from "./ui/card";

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Card className="p-6 flex fixed top-0 left-0 right-0 z-10">
			<Link href="/" className="md:text-2xl text-lg font-semibold">
				Digi-Cards
			</Link>
			<div className="ml-auto mr-2 flex">{children}</div>
			<div className="">
				<ThemeToggleDropdown></ThemeToggleDropdown>
			</div>
		</Card>
	);
};

export default NavbarContainer;
