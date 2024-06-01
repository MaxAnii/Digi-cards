import ProfileEditContainer from "./Sidebar";
import UserProfilePhotoContainer from "./UserProfilePhotoContainer";
import ContactIcon from "./SocialContactIcon";
import MainContactLinks from "./MainContactLinks";
import DownloadUserDetails from "./DownloadUserDetails";

const ProfileContainer = () => {
	return (
		<>
			<div className="flex justify-center profile-background min-h-[95vh] ">
				{/* <div className="flex justify-center bg-gradient-to-r from-slate-300 to-slate-500 min-h-[95vh] "> */}
				<div className="  my-5  rounded-lg  pb-5 ">
					<div className="">
						<UserProfilePhotoContainer></UserProfilePhotoContainer>
					</div>
					<div className=" md:max-w-[70vw]">
						<div className="flex flex-wrap justify-center md:gap-10 gap-x-3 gap-y-5 mt-[50px]">
							<MainContactLinks></MainContactLinks>
							<ContactIcon></ContactIcon>
						</div>
						<div className="flex justify-center mt-10">
							<DownloadUserDetails></DownloadUserDetails>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-5 md:right-12 right-1 drop-shadow-xl">
				<ProfileEditContainer></ProfileEditContainer>
			</div>
		</>
	);
};

export default ProfileContainer;
