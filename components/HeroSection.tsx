import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import herosection from "@/public/herosection.png";
const HeroSection = () => {
	return (
		<div className="flex w-full  h-[500px] items-center justify-center hero-section">
			<div className="flex  w-full items-center justify-center pl-5">
				<div className="text-center">
					<h1 className="text-3xl font-bold lg:text-5xl text-wrap">
						Add & Share Your Digital Profile.
					</h1>
					<p className="w-full p-4 text-center lg:px-[120px]">
						A modern solution for creating and sharing your digital identity.
					</p>
					<div className="text-3xl mt-5">
						<Link href="/signin">
							<Button size="lg" className="text-base ">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="shadow-2xl border-2 hidden md:block   rounded-3xl mx-32 ">
				<Image src={herosection} alt="heroselect image" width={1300} />
			</div>
		</div>
	);
};

export default HeroSection;
