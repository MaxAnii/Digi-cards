"use client";
import { getPhoto } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState, useTransition } from "react";
import noUserPhoto from "@/public/NoProfilePhoto.jpg";
import Image from "next/image";
import ProfilePhotoSkeleton from "./ProfilePhotoSkeleton";
const UserProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("");
	const [isPending, startTransiton] = useTransition();
	const getUserPhoto = async () => {
		const data = await getPhoto(userInformation.userId, "profilePhoto");
		if (!data?.profilePhoto) return;

		const bufferData = Buffer.from(data?.profilePhoto);
		const blob = new Blob([bufferData], { type: "image/jpeg" });
		const url = URL.createObjectURL(blob);
		setImage(url);
	};
	useEffect(() => {
		startTransiton(() => {
			getUserPhoto();
		});
	}, [userInformation.callProfilePhoto]);
	return (
		<div className="relative md:top-[-50px] top-[-20px]  z-0 ">
			{!isPending ? (
				<>
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
				</>
			) : (
				<ProfilePhotoSkeleton></ProfilePhotoSkeleton>
			)}
		</div>
	);
};

export default UserProfilePhoto;
