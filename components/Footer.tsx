import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="bg-[#91913d8a]  py-6 mt-2">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<p className="text-sm mb-2">
						&copy; {new Date().getFullYear()} digiCard. All rights reserved.
					</p>
					<p className="text-sm">
						Developed by{" "}
						<a
							href="https://itsmeansar.vercel.app"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ansar
						</a>
					</p>
					<p className="text-sm">
						<a href="mailto:ansarbaba2000@gmail.com" className=" underline">
							Report an issue
						</a>
					</p>
				</div>
				<div className="flex space-x-4 bg-black rounded-md p-5">
					<a
						href="https://x.com/ansar__baba"
						className="text-gray-400 hover:text-white"
						aria-label="Twitter"
					>
						<FaTwitter />
					</a>

					<a
						href="https://www.linkedin.com/in/ansar-ul-haq/"
						className="text-gray-400 hover:text-white"
						aria-label="LinkedIn"
					>
						<FaLinkedin></FaLinkedin>
					</a>
					<a
						href="https://github.com/MaxAnii"
						className="text-gray-400 hover:text-white"
						aria-label="Github"
					>
						<FaGithub></FaGithub>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
