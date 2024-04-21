import Image from "next/image";

import Link from "next/link";
const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		// <div className="p-6 flex fixed top-0 left-0 right-0 z-10   bg-white/40 shadow-lg ring-1 ring-black/5">
		<div>
			<div className="p-6 flex shadow-xl  ">
				<Link href="/" className=" md:text-3xl text-lg font-mono ">
					Digi-Cards
				</Link>
				<div className="ml-auto">{children}</div>
			</div>
		</div>
	);
};

export default NavbarContainer;
