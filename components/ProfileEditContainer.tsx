import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import EditProfileButton from "./EditProfileButton";
import SocialMediaLinks from "./SocialMedialLinkForm";

const ProfileEditContainer = () => {
	return (
		<div>
			<Sheet>
				<SheetTrigger>
					<EditProfileButton></EditProfileButton>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
					<SocialMediaLinks></SocialMediaLinks>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default ProfileEditContainer;
