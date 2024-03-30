import { Card, CardDescription } from "@/components/ui/card";
import facebook from "@/public/facebook.svg";
import github from "@/public/github.svg";
import gmail from "@/public/gmail.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import pinterest from "@/public/pinterest.svg";
import snapchat from "@/public/snapchat.svg";
import telegram from "@/public/telegram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import youtube from "@/public/youtube.svg";
import phone from "@/public/phone.png";

import Image from "next/image";
const ContactIcon = () => {
	const socialIcons = {
		phone,
		whatsapp,
		facebook,
		github,
		gmail,
		instagram,
		linkedin,
		pinterest,
		snapchat,
		telegram,
		twitter,
		youtube,
	};

	return (
		<>
			{Object.entries(socialIcons).map(([name, value], index) => {
				return (
					<Card
						key={index}
						className="p-5 dark:bg-slate-700 md:h-[140px] md:w-[140px] h-[120px] w-[120px] hover:rotate-12"
					>
						<Image
							className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-full border-4 border-[#f7f7f7] dark:dark:bg-slate-300"
							// src="https://special-harlequin-squid.faviconkit.com/itsmeansar.vercel.app/356"
							src={value}
							alt="favicon"
						></Image>
						<CardDescription className="dark:text-white md:pt-3 pt-1 text-center">
							{name}
						</CardDescription>
					</Card>
				);
			})}
		</>
	);
};

export default ContactIcon;
