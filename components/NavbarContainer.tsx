import Link from "next/link";
const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
	return (
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
