"use client";
import { useContext } from "react";
import UserProfilePhoto from "./UserProfilePhoto";
import BackgroundProfilePhoto from "./BackgroundProfilePhoto";
import { UserInformationContext } from "@/hook/userInformationContext";

const UserProfilePhotoContainer = () => {
	const userInformation = useContext(UserInformationContext);

	return (
		<div className="  m-1 ">
			<BackgroundProfilePhoto></BackgroundProfilePhoto>
			<UserProfilePhoto></UserProfilePhoto>

			<div className="md:mt-[-40px] px-6 md:w-[70vw] text-white">
				<div className=" text-3xl ">{userInformation.userName}</div>
				<div className="mb-1 text-lg font-medium ">
					{userInformation.userbio}
				</div>
			</div>
		</div>
	);
};

export default UserProfilePhotoContainer;
