"use client";
import { getSocialLinks } from "@/actions/userInformation";
import { Card, CardDescription } from "@/components/ui/card";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState, useTransition } from "react";
import ContactIconSkeletonLoader from "./ContactIconSkeletonLoader";
type socialLinks = {
	id: string;
	userId: string;
	link: string;
};
const ContactIcon = () => {
	const userInformation = useContext(UserInformationContext);
	const [socialMedia, setSocialMedia] = useState<socialLinks[]>();
	const getLinks = async () => {
		if (userInformation.socialLinks)
			setSocialMedia(userInformation.socialLinks);
	};
	useEffect(() => {
		getLinks();
	}, [userInformation.callSocialLinks]);

	return (
		<>
			{socialMedia?.map((elem, index) => {
				const link = new URL(elem.link).hostname;
				const webSiteName = link.includes("www")
					? link.split(".")[1]
					: link.split(".")[0];
				return (
					<a href={elem.link} target="_blank" key={index}>
						<Card
							key={index}
							className="md:h-[120px] md:w-[120px] h-[100px] w-[120px] hover:translate-y-2 dark:bg-slate-200 flex justify-center items-center "
						>
							<div className=" ">
								<div className="  	 flex justify-center items-center">
									<img
										className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl   p-2 "
										src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
										alt="favicon"
									></img>
								</div>
								<CardDescription className="md:min-w-full dark:text-black  pt-1 text-center  overflow-auto text-sm md:text-base">
									{webSiteName}
								</CardDescription>
							</div>
						</Card>
					</a>
				);
			})}
		</>
	);
};

export default ContactIcon;
