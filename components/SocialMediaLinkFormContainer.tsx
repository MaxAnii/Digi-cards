import { useContext, useEffect, useState } from "react";
import SocialMediaLinkForm from "./SocialMediaLinkForm";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getSocialLinks } from "@/actions/userInformation";
type socialLinksType = {
	id: string;
	userId: string;
	link: string;
};
const SocialMediaLinkFormContainer = () => {
	const userInformation = useContext(UserInformationContext);
	const [socialMedia, setSocialMedia] = useState<socialLinksType[] | null>();
	const getLinks = async () => {
		// const data = await getSocialLinks(userInformation.userId);
		setSocialMedia(userInformation.socialLinks);
	};
	useEffect(() => {
		getLinks();
	}, []);
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
