import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavbarContainer from "@/components/NavbarContainer";
const LandingPage = () => {
	return (
		<>
			<NavbarContainer>
				<></>
			</NavbarContainer>
			<div className="flex h-screen w-full items-center justify-center">
				<div className="text-center">
					<button className="my-2 rounded-3xl p-5 text-xl dark:bg-black">
						Welcome to Digi Cards
					</button>
					<h1 className="text-3xl font-bold lg:text-5xl">
						Create & Share Your Digital Profile
					</h1>
					<p className="w-full p-4 text-center lg:px-[120px]">
						Digi-Cards provides a powerful solution for crafting and sharing
						digital business cards. With our platform, you can easily create
						professional online business cards and share them with others.
						Enhance your networking and establish your digital presence with
						Digi-Cards.
					</p>
					<div className="text-3xl ">
						<Link href="/signin">
							<Button size="lg" className="text-base text-indigo-950">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
