import { BsSave } from "react-icons/bs";
import { Card } from "./ui/card";
import { useContext, useEffect, useState } from "react";
import { UserInformationContext } from "@/hook/userInformationContext";
import { Button } from "./ui/button";

type DataType =
	| {
			phone: string | null;
			name: string | null;
			email: string | null;
			phoneCountryCode: string | null;
			whatsappCountryCode: string | null;
			whatsapp: string | null;
	  }
	| undefined;

const DownloadUserDetails = () => {
	const userInformation = useContext(UserInformationContext);
	const [userData, setUserData] = useState<DataType>();
	const [socialLinks, setSocialLinks] = useState<string>("");

	const getLinks = async () => {
		const data = userInformation.socialLinks;
		if (!data) return;
		const socialMediaFields = data.map((elem) => `URL:${elem.link}`).join("\n");
		setSocialLinks(socialMediaFields);
	};

	const getDetails = async () => {
		setUserData({
			phone: userInformation.phoneNumber,
			email: userInformation.email,
			name: userInformation.userName,
			phoneCountryCode: userInformation.phoneCountryCode,
			whatsapp: userInformation.whatsappNumber,
			whatsappCountryCode: userInformation.whatsappCountryCode,
		});
	};

	useEffect(() => {
		getDetails();
	}, [
		userInformation.phoneNumber,
		userInformation.email,
		userInformation.userName,
		userInformation.phoneCountryCode,
		userInformation.whatsappNumber,
		userInformation.whatsappCountryCode,
	]);

	useEffect(() => {
		getLinks();
	}, [userInformation.socialLinks]);
	if (!userData) return null;

	const phoneWithCountryCode = `${userData.phoneCountryCode?.split("+")[1]}${
		userData.phone
	}`;
	const whatsAppWithCountryCode = `${
		userData.whatsappCountryCode?.split("+")[1]
	}${userData.whatsapp}`;

	const vCardData = `BEGIN:VCARD
VERSION:4.0
N:${userData.name ?? ""}
TEL;TYPE=CELL:${phoneWithCountryCode ?? ""}
TEL;TYPE=WORK:${whatsAppWithCountryCode ?? ""}
EMAIL:${userData.email ?? ""}
${socialLinks}
END:VCARD`;

	const vCardURL = `data:text/vcard;charset=utf-8,${encodeURIComponent(
		vCardData
	)}`;

	return (
		<a href={vCardURL} download={`${userData.name}.vcf`}>
			<Button
				className="md:h-[60px] md:w-[350px] h-[55px] w-[300px] p-3  hover:shadow-xl hover:translate-y-2"
				variant="default"
			>
				<div className="flex gap-2 justify-center items-center">
					<div>
						<BsSave size="40px" />
					</div>
					<div> Save as Contact</div>
				</div>
			</Button>
		</a>
	);
};

export default DownloadUserDetails;
