import React from "react";

import ProfileEditContainer from "./ProfileEditContainer";
import UserProfilePhotoContainer from "./UserProfilePhotoContainer";
import ContactIcon from "./ContactIcon";

const ProfileContainer = () => {
	return (
		<>
			<div className="lg:flex lg:justify-center lg:flex-wrap md:m-[5%] ">
				<div className="lg:fixed left-9 lg:mt-[50px] mt-[100px]">
					<UserProfilePhotoContainer></UserProfilePhotoContainer>
				</div>
				<div className="  lg:max-w-[40vw]  md:ml-auto ">
					<div className="flex flex-wrap justify-center lg:gap-5 gap-3 lg:mt-[50px]">
						<ContactIcon></ContactIcon>
					</div>
				</div>
			</div>
			<div className="fixed bottom-5 md:left-12 left:0 drop-shadow-xl">
				<ProfileEditContainer></ProfileEditContainer>
			</div>
		</>
	);
};

export default ProfileContainer;
