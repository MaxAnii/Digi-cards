import Link from "next/link";
import { BsSave } from "react-icons/bs";
import { Card } from "./ui/card";
import { useContext, useEffect, useState } from "react";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getUserDetailsToDownload } from "@/actions/DownloadDetails";
import { getSocialLinks } from "@/actions/userInformation";

type DataType =
	| {
			phone: string | null;
			name: string | null;
			email: string | null;
			profilePhoto: Buffer | null;
			phoneCountryCode: string | null;
			whatsappCountryCode: string | null;
			whatsapp: string | null;
	  }
	| undefined;

const DownloadUserDetails = () => {
	const userInformation = useContext(UserInformationContext);
	const [userData, setUserData] = useState<DataType>();
	const [imageUrl, setImageUrl] = useState<any>();
	const [socialLinks, setSocialLinks] = useState<string>("");

	const getLinks = async () => {
		const data = await getSocialLinks(userInformation.userId);
		if (!data) return;
		const socialMediaFields = data.map((elem) => `URL:${elem.link}`).join("\n");
		setSocialLinks(socialMediaFields);
	};

	const getDetails = async () => {
		const data = await getUserDetailsToDownload(userInformation.userId);
		if (!data) return;
		setUserData(data);
		if (!data.profilePhoto) return;
		const base64Data = data.profilePhoto.toString("base64");
		console.log(base64Data);
		setImageUrl(base64Data);
	};

	useEffect(() => {
		getDetails();
		getLinks();
	}, [userInformation.userId]);

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

	// Encode vCardData
	const vCardURL = `data:text/vcard;charset=utf-8,${encodeURIComponent(
		vCardData
	)}`;

	return (
		<a href={vCardURL} download={`${userData.name}.vcf`}>
			<Card className="md:h-[50px] md:w-[50px] h-[50px] w-[50px] p-3 dark:bg-slate-300 dark:text-black hover:shadow-xl hover:translate-y-2">
				<BsSave size="2xl" />
			</Card>
		</a>
	);
};

export default DownloadUserDetails;
