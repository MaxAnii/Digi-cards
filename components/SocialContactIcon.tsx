"use client";
import { Card, CardDescription } from "@/components/ui/card";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState, useTransition } from "react";
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
	}, [userInformation.socialLinks]);

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
							className="md:h-[120px] md:w-[120px] h-[100px] w-[180px] hover:translate-y-2 flex justify-center items-center shadow-xl bg-gray-200"
						>
							<div className="flex md:block items-center">
								<div className="flex justify-center items-center">
									<img
										className=" h-[70px] w-[70px]   rounded-xl   p-2 "
										src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
										alt="favicon"
									></img>
								</div>
								<CardDescription className="md:min-w-full  pt-1 text-center  overflow-auto text-sm md:text-base text-black">
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
