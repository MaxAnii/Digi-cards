"use client";
import ProfileEditContainer from "./Sidebar";
import UserProfilePhotoContainer from "./UserProfilePhotoContainer";
import ContactIcon from "./SocialContactIcon";
import MainContactLinks from "./MainContactLinks";
import DownloadUserDetails from "./DownloadUserDetails";

const ProfileContainer = () => {
	return (
		<>
			<div className="lg:flex lg:justify-center lg:flex-wrap md:m-[5%] ">
				<div className="lg:fixed left-9 lg:mt-[50px] mt-[100px]">
					<UserProfilePhotoContainer></UserProfilePhotoContainer>
				</div>
				<div className="  lg:max-w-[40vw]  md:ml-auto ">
					<div className="flex flex-wrap justify-center lg:gap-5 gap-3 lg:mt-[50px]">
						<MainContactLinks></MainContactLinks>
						<ContactIcon></ContactIcon>
					</div>
				</div>
			</div>
			<div className="fixed bottom-5 md:right-12 right-1 drop-shadow-xl">
				<ProfileEditContainer></ProfileEditContainer>
			</div>
			<div className="ml-12	fixed bottom-7	 md:justify-end sm:justify-center  drop-shadow-xl">
				<DownloadUserDetails></DownloadUserDetails>
			</div>
		</>
	);
};

export default ProfileContainer;
