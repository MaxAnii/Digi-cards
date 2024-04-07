import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import EditProfileButton from "./EditProfileButton";

import SocialMedialLinkForm from "./EidtProfilContainer";

const ProfileEditContainer = () => {
	return (
		<div>
			<Sheet>
				<SheetTrigger>
					<EditProfileButton></EditProfileButton>
				</SheetTrigger>
				<SheetContent className="dark:bg-slate-900  px-2 md:p-4  md:min-w-[600px] min-w-[90vw] overflow-auto ">
					<SheetHeader>
						<SheetTitle>Edit your Profile</SheetTitle>

						<SocialMedialLinkForm></SocialMedialLinkForm>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default ProfileEditContainer;
