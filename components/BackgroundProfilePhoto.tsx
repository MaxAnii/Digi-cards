"use client";
import { getPhoto } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import Image from "next/image";
import { useContext, useEffect, useState, useTransition } from "react";
import noBackgroundPhoto from "@/public/NoBackgroundPhoto.jpg";
import BackgroundSkeletonLoader from "./BackgroundSkeletonLoader";
const BackgroundProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("userImage");
	const [isPending, startTransiton] = useTransition();
	const getBackgroundPhoto = async () => {
		const data = await getPhoto(userInformation.userId, "backgroundPhoto");
		if (!data?.backgroundPhoto) {
			setImage("");
			return;
		}
		const bufferData = Buffer.from(data?.backgroundPhoto);
		const blob = new Blob([bufferData], { type: "image/jpeg" });
		const url = URL.createObjectURL(blob);
		setImage(url);
	};
	useEffect(() => {
		startTransiton(() => {
			getBackgroundPhoto();
		});
	}, [userInformation.callBackgroundPhoto]);
	return (
		<div className="lg:w-[45vw]">
			{!isPending ? (
				<>
					<div className="  border-[#f7f7f7] border-2 shadow-lg rounded-xl">
						{image ? (
							<img
								src={image}
								alt="backgroun Image"
								className="lg:h-[240px] md:h-[180px] h-[130px] w-[100%]   rounded-xl"
							/>
						) : (
							<Image
								src={noBackgroundPhoto}
								className="lg:h-[240px] md:h-[180px] h-[130px] w-[100%]   rounded-xl"
								alt="Background Photo"
							/>
						)}
					</div>
				</>
			) : (
				<BackgroundSkeletonLoader></BackgroundSkeletonLoader>
			)}
		</div>
	);
};

export default BackgroundProfilePhoto;
