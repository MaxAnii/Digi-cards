import { useContext, useEffect, useState, useTransition } from "react";
import gmail from "@/public/gmail.svg";
import whatsapp from "@/public/whatsapp.svg";
import phone from "@/public/phone.png";
import Image from "next/image";
import { Card, CardDescription } from "./ui/card";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getMainLinks } from "@/actions/userInformation";
import ContactIconSkeletonLoader from "./ContactIconSkeletonLoader";
const MainContactLinks = () => {
	const userInformation = useContext(UserInformationContext);
	const [mainLinks, setMainLinks] = useState<{
		whatsapp: string | null;
		phone: string | null;
		email: string | null;
		whatsappCountryCode: string | null;
		phoneCountryCode: string | null;
	}>();

	const getLinks = async () => {
		setMainLinks({
			phoneCountryCode: userInformation.phoneCountryCode,
			whatsapp: userInformation.whatsappNumber,
			phone: userInformation.phoneNumber,
			email: userInformation.email,
			whatsappCountryCode: userInformation.whatsappCountryCode,
		});
	};
	useEffect(() => {
		getLinks();
	}, [
		userInformation.email,
		userInformation.phoneNumber,
		userInformation.whatsappNumber,
		userInformation.phoneCountryCode,
		userInformation.whatsappCountryCode,
	]);
	return (
		<>
			{mainLinks?.phone && (
				<a
					href={`tel:+${mainLinks.phoneCountryCode?.split("+")[1]}${
						mainLinks.phone
					}`}
					target="_blank"
				>
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[120px] hover:translate-y-2 dark:bg-slate-200 flex justify-center items-center backdrop-blur-3xl">
						<div>
							<div className="  	 flex justify-center items-center">
								<Image
									className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl p-2 "
									src={phone}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className="dark:text-black pt-1 text-center overflow-hidden">
								Phone
							</CardDescription>
						</div>
					</Card>
				</a>
			)}

			{mainLinks?.whatsapp && (
				<a
					href={`https://wa.me/${mainLinks.whatsappCountryCode?.split("+")[1]}${
						mainLinks.whatsapp
					}`}
					target="_blank"
				>
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[120px] hover:translate-y-2 dark:bg-slate-200 flex justify-center items-center backdrop-blur-3xl">
						<div>
							<div className="  	 flex justify-center items-center">
								<Image
									className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl p-2 "
									src={whatsapp}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className="dark:text-black pt-1 text-center overflow-hidden">
								WhatsApp
							</CardDescription>
						</div>
					</Card>
				</a>
			)}
			{mainLinks?.email && (
				<a href={`mailto:${mainLinks.email}`} target="_blank">
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[120px] hover:translate-y-2 dark:bg-slate-200 flex justify-center items-center backdrop-blur-3xl">
						<div>
							<div className="  	 flex justify-center items-center">
								<Image
									className=" md:h-[70px] md:w-[70px] h-[50px] w-[50px]  rounded-xl p-2 "
									// src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
									src={gmail}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className="dark:text-black pt-1 text-center overflow-hidden">
								Gmail
							</CardDescription>
						</div>
					</Card>
				</a>
			)}
		</>
	);
};

export default MainContactLinks;
