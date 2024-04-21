import ProfileEditContainer from "./Sidebar";
import UserProfilePhotoContainer from "./UserProfilePhotoContainer";
import ContactIcon from "./SocialContactIcon";
import MainContactLinks from "./MainContactLinks";
import DownloadUserDetails from "./DownloadUserDetails";
import { Card } from "./ui/card";

const ProfileContainer = () => {
	return (
		<>
			<div className="flex justify-center bg-gray-200">
				<div className="  my-5  rounded-lg  pb-5 custom-blur">
					<div className="">
						<UserProfilePhotoContainer></UserProfilePhotoContainer>
					</div>
					<div className=" md:max-w-[70vw]  max-w-[100vw]">
						<div className="flex flex-wrap justify-center md:gap-10 gap-4 mt-[50px]">
							<MainContactLinks></MainContactLinks>
							<ContactIcon></ContactIcon>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-5 md:right-12 right-1 drop-shadow-xl">
				<ProfileEditContainer></ProfileEditContainer>
			</div>
			<div className="md:ml-12 ml-1	fixed bottom-7	 md:justify-end sm:justify-center  drop-shadow-xl">
				<DownloadUserDetails></DownloadUserDetails>
			</div>
		</>
	);
};

export default ProfileContainer;
