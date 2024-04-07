import Link from "next/link";
import ThemeToggleDropdown from "./ThemeToggleDropdown";
const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		// <div className="p-6 flex fixed top-0 left-0 right-0 z-10   bg-white/40 shadow-lg ring-1 ring-black/5">
		<div>
			<div className="p-6 flex fixed top-0 left-0 right-0 z-10  bg-white/10 shadow-xl backdrop-blur-lg  ">
				<Link href="/" className="md:text-3xl text-lg font-mono text-gray-100">
					Digi-Cards
				</Link>
				<div className="ml-auto mr-2 flex">{children}</div>
				<div className="">
					<ThemeToggleDropdown></ThemeToggleDropdown>
				</div>
			</div>
			<div className="p-6 flex fixed top-0 left-0 right-0 z-0 bg-gradient-to-r from-black to-white "></div>
		</div>
	);
};

export default NavbarContainer;
