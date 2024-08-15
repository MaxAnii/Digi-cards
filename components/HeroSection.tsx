import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import herosection from "@/public/herosection.png";
const HeroSection = () => {
	return (
		<div className="md:flex w-full  md:h-[500px] items-center justify-center hero-section pb-5">
			<div className="flex  w-full items-center justify-center p-5 ">
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
			<div className="shadow-2xl border-2  rounded-3xl md:mr-5 w-full   flex justify-center mb-5">
				<div>
					<Image src={herosection} alt="heroselect image"></Image>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
