"use client";
import { getAllInformation, getSocialLinks } from "@/actions/userInformation";
import {
	createContext,
	useState,
	ReactNode,
	useEffect,
	useTransition,
} from "react";

type UserInformationContextType = {
	userId: string | null;
	setUserId: React.Dispatch<React.SetStateAction<string | null>>;
	setUserName: React.Dispatch<React.SetStateAction<string | null>>;
	userName: string | null;
	setUserBio: React.Dispatch<React.SetStateAction<string | null>>;
	userbio: string | null;
	setWhatsappNumber: React.Dispatch<React.SetStateAction<string | null>>;

	whatsappNumber: string | null;
	setWhatsappCountryCode: React.Dispatch<React.SetStateAction<string | null>>;

	whatsappCountryCode: string | null;
	setPhoneNumber: React.Dispatch<React.SetStateAction<string | null>>;

	phoneNumber: string | null;
	setPhoneCountryCode: React.Dispatch<React.SetStateAction<string | null>>;

	phoneCountryCode: string | null;
	setEmail: React.Dispatch<React.SetStateAction<string | null>>;
	email: string | null;
	setSocialLinks: React.Dispatch<
		React.SetStateAction<Array<{
			id: string;
			userId: string;
			link: string;
		}> | null>
	>;
	socialLinks: Array<{
		id: string;
		userId: string;
		link: string;
	}> | null;
	profilePhoto: string | null;
	setProfilePhoto: React.Dispatch<React.SetStateAction<string | null>>;
	backgroundPhoto: string | null;
	setBackgroundPhoto: React.Dispatch<React.SetStateAction<string | null>>;
	isPending: boolean;
};

export const UserInformationContext = createContext<UserInformationContextType>(
	{
		userId: "",
		setUserId: () => {},
		setUserName: () => {},
		userName: "",
		setUserBio: () => {},
		userbio: "",
		setWhatsappNumber: () => {},
		whatsappNumber: "",
		setWhatsappCountryCode: () => {},
		whatsappCountryCode: "",
		setPhoneNumber: () => {},
		phoneNumber: "",
		setPhoneCountryCode: () => {},
		phoneCountryCode: "",
		setEmail: () => {},
		email: "",

		setSocialLinks: () => {},
		socialLinks: null,
		profilePhoto: null,
		setProfilePhoto: () => {},
		backgroundPhoto: null,
		setBackgroundPhoto: () => {},
		isPending: false,
	}
);

const UserInformationProvider = ({ children }: { children: ReactNode }) => {
	const [userId, setUserId] = useState<string | null>("");
	const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
	const [backgroundPhoto, setBackgroundPhoto] = useState<string | null>(null);
	const [userName, setUserName] = useState<string | null>("");
	const [userbio, setUserBio] = useState<string | null>("");
	const [phoneCountryCode, setPhoneCountryCode] = useState<string | null>("");
	const [phoneNumber, setPhoneNumber] = useState<string | null>("");
	const [whatsappCountryCode, setWhatsappCountryCode] = useState<string | null>(
		""
	);
	const [whatsappNumber, setWhatsappNumber] = useState<string | null>("");
	const [email, setEmail] = useState<string | null>("");
	const [socialLinks, setSocialLinks] = useState<Array<{
		id: string;
		userId: string;
		link: string;
	}> | null>(null);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(async () => {
			if (userId) {
				const data = await getAllInformation(userId);
				if (!data) return;
				setUserName(data?.BasicDetails[0].name);
				setUserBio(data?.BasicDetails[0].bio);
				setProfilePhoto(data?.BasicDetails[0].profilePhoto);
				setBackgroundPhoto(data?.BasicDetails[0].backgroundPhoto);
				setPhoneCountryCode(data?.BasicDetails[0].phoneCountryCode);
				setPhoneNumber(data?.BasicDetails[0].phone);
				setWhatsappCountryCode(data?.BasicDetails[0].whatsappCountryCode);
				setWhatsappNumber(data?.BasicDetails[0].whatsapp);
				setEmail(data?.BasicDetails[0].email);
				setSocialLinks(data?.socialLinks);
			}
		});
	}, [userId]);
	const getLinks = async () => {
		if (!userId) return;
		const data = await getSocialLinks(userId);
		if (data) setSocialLinks(data);
	};

	return (
		<UserInformationContext.Provider
			value={{
				userId,
				setUserId,
				userName,
				setUserName,
				setUserBio,
				userbio,
				setEmail,
				email,
				setPhoneCountryCode,
				phoneCountryCode,
				phoneNumber,
				setPhoneNumber,
				whatsappNumber,
				setWhatsappNumber,
				whatsappCountryCode,
				setWhatsappCountryCode,
				profilePhoto,
				setProfilePhoto,
				setBackgroundPhoto,
				backgroundPhoto,

				setSocialLinks,
				socialLinks,
				isPending,
			}}
		>
			{children}
		</UserInformationContext.Provider>
	);
};

export default UserInformationProvider;
