"use client";
import { getPhoto } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState } from "react";
const UserProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("");

	const getUserPhoto = async () => {
		const data = await getPhoto(userInformation.userId, "profilePhoto");
		if (!data?.profilePhoto) return;
		const bufferData = Buffer.from(data?.profilePhoto);
		const blob = new Blob([bufferData], { type: "image/jpeg" });
		const url = URL.createObjectURL(blob);
		setImage(url);
	};
	useEffect(() => {
		getUserPhoto();
	}, [userInformation.callProfilePhoto]);
	return (
		<div className="relative md:top-[-50px] top-[-20px] ">
			<img
				className=" md:w-[200px] w-[140px] md:h-[200px] h-[140px] md: rounded-full  border-[#f7f7f7] border-2 shadow-lg z-0 "
				alt="user profile"
				src={image}
			/>
		</div>
	);
};

export default UserProfilePhoto;
