"use client";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState, useTransition } from "react";
import noUserPhoto from "@/public/NoProfilePhoto.jpg";
import Image from "next/image";
const UserProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("");
	const getUserPhoto = async () => {
		if (userInformation.profilePhoto) {
			setImage(userInformation.profilePhoto);
		}
	};
	useEffect(() => {
		getUserPhoto();
	}, [userInformation.profilePhoto]);
	return (
		<div className="relative md:top-[-70px] top-[-20px]  z-0  ">
			{image ? (
				<img
					className=" md:w-[200px] w-[140px] md:h-[200px] h-[140px] rounded-full  border-[#f7f7f7] border-2 object-fill"
					alt="user profile"
					src={image}
				/>
			) : (
				<Image
					src={noUserPhoto}
					className=" md:w-[200px] w-[140px] md:h-[200px] h-[140px]  rounded-full  border-[#f7f7f7] border-2"
					alt="no profile photo"
				/>
			)}
		</div>
	);
};

export default UserProfilePhoto;
