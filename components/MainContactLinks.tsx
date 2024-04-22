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
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[180px] hover:translate-y-2 flex justify-center items-center shadow-2xl bg-slate-300 custom-blur">
						<div className="flex md:block items-center">
							<div className="  	 flex justify-center items-center">
								<Image
									className=" h-[70px] w-[70px]   rounded-xl p-2 "
									src={phone}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className="text-slate-600 pt-1 text-center overflow-hidden">
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
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[180px] hover:translate-y-2 flex justify-center items-center shadow-2xl bg-slate-300 custom-blur">
						<div className="flex md:block items-center">
							<div className="  	 flex justify-center items-center">
								<Image
									className=" h-[70px] w-[70px]   rounded-xl p-2 "
									src={whatsapp}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className=" pt-1 text-center overflow-hidden text-slate-600">
								WhatsApp
							</CardDescription>
						</div>
					</Card>
				</a>
			)}
			{mainLinks?.email && (
				<a href={`mailto:${mainLinks.email}`} target="_blank">
					<Card className="md:h-[120px] md:w-[120px] h-[100px] w-[180px] hover:translate-y-2 flex justify-center items-center shadow-2xl bg-slate-300 custom-blur">
						<div className="flex md:block items-center">
							<div className="  	 flex justify-center items-center">
								<Image
									className=" h-[70px] w-[70px]   rounded-xl   p-2 "
									src={gmail}
									alt="favicon"
								></Image>
							</div>
							<CardDescription className="md:min-w-full  pt-1 text-center  overflow-auto text-sm md:text-base text-slate-600">
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
