"use client";
import { createContext, useState, ReactNode } from "react";

type UserInformationContextType = {
	userId: string;
	setUserId: React.Dispatch<React.SetStateAction<string>>;
	callNameDescription: Boolean;
	setCallNameDescription: React.Dispatch<React.SetStateAction<boolean>>;
	callBackgroundPhoto: Boolean;
	setCallBackgroundPhoto: React.Dispatch<React.SetStateAction<boolean>>;
	callProfilePhoto: Boolean;
	setCallProfilePhoto: React.Dispatch<React.SetStateAction<boolean>>;
	callMainLinks: Boolean;
	setCallMainLinks: React.Dispatch<React.SetStateAction<boolean>>;
	callSocialLinks: Boolean;
	setCallSocialLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserInformationContext = createContext<UserInformationContextType>(
	{
		userId: "",
		setUserId: () => {},
		callNameDescription: false,
		setCallNameDescription: () => {},
		callBackgroundPhoto: false,
		setCallBackgroundPhoto: () => {},
		callProfilePhoto: false,
		setCallProfilePhoto: () => {},
		callMainLinks: false,
		setCallMainLinks: () => {},
		callSocialLinks: false,
		setCallSocialLinks: () => {},
	}
);

const UserInformationProvider = ({ children }: { children: ReactNode }) => {
	const [userId, setUserId] = useState<string>("");
	const [callNameDescription, setCallNameDescription] =
		useState<boolean>(false);
	const [callBackgroundPhoto, setCallBackgroundPhoto] =
		useState<boolean>(false);
	const [callProfilePhoto, setCallProfilePhoto] = useState<boolean>(false);
	const [callMainLinks, setCallMainLinks] = useState<boolean>(false);
	const [callSocialLinks, setCallSocialLinks] = useState<boolean>(false);

	return (
		<UserInformationContext.Provider
			value={{
				userId,
				setUserId,
				callNameDescription,
				setCallNameDescription,
				callBackgroundPhoto,
				setCallBackgroundPhoto,
				callProfilePhoto,
				setCallProfilePhoto,
				callMainLinks,
				setCallMainLinks,
				callSocialLinks,
				setCallSocialLinks,
			}}
		>
			{children}
		</UserInformationContext.Provider>
	);
};

export default UserInformationProvider;
