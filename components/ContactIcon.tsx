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
	const socialIcons = [
		phone,
		whatsapp,
		// 	facebook,
		// 	github,
		// 	gmail,
		// 	instagram,
		// 	linkedin,
		// 	pinterest,
		// 	snapchat,
		telegram,
		// 	twitter,
		// 	youtube,
	];
	const socialMedia = [
		"https://www.facebook.com/fakeuser123",
		"https://www.instagram.com/fakeuser123",
		"https://www.linkedin.com/in/fakeuser123",
		"https://www.tiktok.com/@fakeuser123",
		"https://www.youtube.com/user/fakeuser123",
		"https://twitter.com/fakeuser123",
		"https://www.pinterest.com/fakeuser123",
		"https://www.snapchat.com/add/fakeuser123",
		"https://www.reddit.com/user/fakeuser123",
		"https://itsmeansar.vercel.app/",
	];

	return (
		<>
			{/* {Object.entries(socialIcons).map(([name, value], index) => { */}
			{socialIcons.map((elem, index) => {
				// const link = new URL(elem).hostname;
				return (
					<a href={elem} target="_blank">
						<Card
							key={index}
							className="p-5  md:h-[140px] md:w-[140px] h-[120px] w-[120px] hover:translate-y-2 dark:bg-slate-200 "
						>
							<Image
								className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl   p-2 "
								// src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
								src={elem}
								alt="favicon"
							></Image>
							<CardDescription className="dark:text-black md:pt-3 pt-1 text-center"></CardDescription>
						</Card>
					</a>
				);
			})}
			{socialMedia.map((elem, index) => {
				const link = new URL(elem).hostname;
				return (
					<a href={elem} target="_blank">
						<Card
							key={index}
							className="p-5  md:h-[140px] md:w-[140px] h-[120px] w-[120px] hover:translate-y-2 dark:bg-slate-200 "
						>
							<img
								className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl   p-2 "
								src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
								alt="favicon"
							></img>
							<CardDescription className="dark:text-black md:pt-3 pt-1 text-center">
								{`@${link.slice(4, 15)}`}
							</CardDescription>
						</Card>
					</a>
				);
			})}
		</>
	);
};

export default ContactIcon;
