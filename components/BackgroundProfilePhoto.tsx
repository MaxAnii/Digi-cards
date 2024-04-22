"use client";
import { UserInformationContext } from "@/hook/userInformationContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import noBackgroundPhoto from "@/public/logo1.png";
const BackgroundProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("");
	const getBackgroundPhoto = async () => {
		if (userInformation.backgroundPhoto !== null) {
			setImage(userInformation.backgroundPhoto);
		}
	};
	useEffect(() => {
		getBackgroundPhoto();
	}, [userInformation.backgroundPhoto]);
	console.log(image);
	return (
		<div className="md:w-[70vw] ">
			<div className="  border-[#f7f7f7] border-2 shadow-lg rounded-xl">
				{!!image ? (
					<img
						src={image}
						alt="backgroun Image"
						className="lg:h-[240px] md:h-[180px] h-[130px] min-w-[100%]   rounded-xl"
					/>
				) : (
					<Image
						src={noBackgroundPhoto}
						className="lg:h-[280px] md:h-[180px] h-[130px]  min-w-[100%]  rounded-xl p-2 bg-black	"
						alt="Background Photo"
					/>
				)}
			</div>
		</div>
	);
};

export default BackgroundProfilePhoto;
