import Image from "next/image";

import Link from "next/link";
const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		// <div className="p-6 flex fixed top-0 left-0 right-0 z-10   bg-white/40 shadow-lg ring-1 ring-black/5">
		<div>
			<div className="md:p-6 p-2 py-6 flex shadow-xl  bg-[#ebedee]">
				<Link href="/" className=" md:text-3xl text-xl font-mono ">
					DigiCards
				</Link>
				<div className="ml-auto md:flex ">{children}</div>
			</div>
		</div>
	);
};

export default NavbarContainer;
