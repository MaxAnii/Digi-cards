"use client";
import { getPhoto } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import Image from "next/image";
import { useContext, useEffect, useState, useTransition } from "react";
import noBackgroundPhoto from "@/public/logo1.png";
import BackgroundSkeletonLoader from "./BackgroundSkeletonLoader";
const BackgroundProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("userImage");
	const [isPending, startTransiton] = useTransition();
	const getBackgroundPhoto = async () => {
		if (userInformation.backgroundPhoto) {
			const bufferData = Buffer.from(userInformation.backgroundPhoto);
			const blob = new Blob([bufferData], { type: "image/jpeg" });
			const url = URL.createObjectURL(blob);
			setImage(url);
		}
	};
	useEffect(() => {
		getBackgroundPhoto();
	}, []);
	return (
		<div className="lg:w-[45vw]">
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
						className="lg:h-[240px] md:h-[180px] h-[130px] w-[100%]   rounded-xl p-2	"
						alt="Background Photo"
					/>
				)}
			</div>
		</div>
	);
};

export default BackgroundProfilePhoto;
