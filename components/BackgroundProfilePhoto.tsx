"use client";

import { getPhoto } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { useContext, useEffect, useState } from "react";
const BackgroundProfilePhoto = () => {
	const userInformation = useContext(UserInformationContext);
	const [image, setImage] = useState("");

	const getBackgroundPhoto = async () => {
		const data = await getPhoto(userInformation.userId, "backgroundPhoto");
		if (!data?.backgroundPhoto) return;
		const bufferData = Buffer.from(data?.backgroundPhoto);
		const blob = new Blob([bufferData], { type: "image/jpeg" });
		const url = URL.createObjectURL(blob);
		setImage(url);
	};
	useEffect(() => {
		getBackgroundPhoto();
	}, [userInformation.callBackgroundPhoto]);
	return (
		<div className="lg:w-[45vw]">
			<div className="  border-[#f7f7f7] border-2 shadow-lg rounded-xl">
				<img
					src={image}
					alt="fds"
					className="lg:h-[240px] md:h-[180px] h-[130px] w-[100%]   rounded-xl"
				/>
			</div>
		</div>
	);
};

export default BackgroundProfilePhoto;
