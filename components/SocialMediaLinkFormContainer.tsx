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
	const [socialMedia, setSocialMedia] = useState<socialLinksType[]>();
	const getLinks = async () => {
		const data = await getSocialLinks(userInformation.userId);
		setSocialMedia(data);
	};
	useEffect(() => {
		getLinks();
	}, [userInformation.callSocialLinks]);
	return (
		<div>
			{socialMedia?.map((elem: socialLinksType) => {
				return (
					<SocialMediaLinkForm
						id={elem.id}
						link={elem.link}
					></SocialMediaLinkForm>
				);
			})}
		</div>
	);
};

export default SocialMediaLinkFormContainer;
