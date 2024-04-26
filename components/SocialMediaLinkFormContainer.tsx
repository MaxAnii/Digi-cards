import { useContext, useEffect, useState } from "react";
import SocialMediaLinkForm from "./SocialMediaLinkForm";
import { UserInformationContext } from "@/hook/userInformationContext";
type socialLinksType = {
	id: string;
	userId: string;
	link: string;
};
const SocialMediaLinkFormContainer = () => {
	const userInformation = useContext(UserInformationContext);
	const [socialMedia, setSocialMedia] = useState<socialLinksType[] | null>();
	const getLinks = async () => {
		setSocialMedia(userInformation.socialLinks);
	};
	useEffect(() => {
		getLinks();
	}, [userInformation.socialLinks]);
	return (
		<div>
			{socialMedia?.map((elem: socialLinksType, index: number) => {
				return (
					<SocialMediaLinkForm
						key={index}
						id={elem.id}
						link={elem.link}
					></SocialMediaLinkForm>
				);
			})}
		</div>
	);
};

export default SocialMediaLinkFormContainer;
