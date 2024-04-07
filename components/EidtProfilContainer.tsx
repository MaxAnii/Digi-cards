import ChangeProfilePhoto from "./ChangeProfilePhoto";
import ChangeBannerPhoto from "./ChangeBannerPhoto";
import { Label } from "./ui/label";

import { NameDescriptionForm } from "./NameDescriptionForm";
import { Separator } from "./ui/separator";
import AddSocialLink from "./AddSocialLink";
import SocialMediaLinkFormContainer from "./SocialMediaLinkFormContainer";
import { MainContactLinksForm } from "./MainContactLinksForm";
const SocialMedialLinkForm = () => {
	return (
		<div className=" text-left font-normal">
			<Separator className=" my-4 h-1"></Separator>
			<div className="">
				<NameDescriptionForm></NameDescriptionForm>
			</div>
			<Separator className=" my-4 h-1"></Separator>

			<div className="">
				<ChangeBannerPhoto></ChangeBannerPhoto>
				<ChangeProfilePhoto></ChangeProfilePhoto>
			</div>
			<Separator className=" my-4 h-1"></Separator>
			<div className="">
				<Label className="mt-2 pl-2 text-lg">Basic Contact Details</Label>

				<MainContactLinksForm></MainContactLinksForm>
			</div>
			<Separator className=" my-4 h-1"></Separator>
			<div className="">
				<Label className="mt-2 pl-2 text-lg">Add social Media Link</Label>

				<AddSocialLink></AddSocialLink>
			</div>
			<Separator className=" my-4 h-1"></Separator>
			<div className="">
				<Label className="mt-2 pl-2 text-lg">Existing Social Media Link</Label>

				<SocialMediaLinkFormContainer />
			</div>
		</div>
	);
};

export default SocialMedialLinkForm;
