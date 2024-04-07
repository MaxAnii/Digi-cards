"use client";
import { useContext, useEffect, useState } from "react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import UserProfilePhoto from "./UserProfilePhoto";
import BackgroundProfilePhoto from "./BackgroundProfilePhoto";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getNameDescription } from "@/actions/userInformation";
const UserProfilePhotoContainer = () => {
	const userInformation = useContext(UserInformationContext);
	const [data, setData] = useState<{
		name: string | null;
		bio: string | null;
	}>();
	const getNamebio = async () => {
		const data = await getNameDescription(userInformation.userId);
		console.log(data);
		if (data) setData(data);
	};
	useEffect(() => {
		getNamebio();
	}, [userInformation.callNameDescription]);
	return (
		<div className=" lg:max-w-[500px] m-1 ">
			<BackgroundProfilePhoto></BackgroundProfilePhoto>
			<UserProfilePhoto></UserProfilePhoto>
			<CardHeader className="mt-[-40px]">
				<CardTitle className=" text-3xl">{data?.name || "Your Name"}</CardTitle>
				<CardDescription className="mb-1">
					{data?.bio || "Small description of yourself"}
				</CardDescription>
			</CardHeader>
		</div>
	);
};

export default UserProfilePhotoContainer;
