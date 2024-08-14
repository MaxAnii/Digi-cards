import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import EditProfileButton from "./EditProfileButton";

import SocialMedialLinkForm from "./EidtProfilContainer";
import PersonalAccountContainer from "./PersonalAccountContainer";
import CopyLink from "./CopyLink";

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
						<Tabs defaultValue="account" className="w-full">
							<TabsList className="flex justify-center gap-4">
								<TabsTrigger value="account">Account</TabsTrigger>
								<TabsTrigger value="personal">Personal</TabsTrigger>
								<TabsTrigger value="profile">Share Profile</TabsTrigger>
							</TabsList>

							<TabsContent value="account">
								<SocialMedialLinkForm></SocialMedialLinkForm>
							</TabsContent>
							<TabsContent value="personal">
								<PersonalAccountContainer></PersonalAccountContainer>
							</TabsContent>
							<TabsContent value="profile">
								<CopyLink></CopyLink>
							</TabsContent>
						</Tabs>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default ProfileEditContainer;
