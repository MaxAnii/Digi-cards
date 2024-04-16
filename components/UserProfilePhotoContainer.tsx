"use client";
import { useContext, useEffect, useState, useTransition } from "react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import UserProfilePhoto from "./UserProfilePhoto";
import BackgroundProfilePhoto from "./BackgroundProfilePhoto";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getNameDescription } from "@/actions/userInformation";
import NameDescriptionSkeletonLoader from "./NameDescriptionSkeletonLoader";
const UserProfilePhotoContainer = () => {
	const [isPending, startTranstion] = useTransition();

	const userInformation = useContext(UserInformationContext);
	const [data, setData] = useState<{
		name: string | null;
		bio: string | null;
	}>();
	const getNamebio = async () => {
		const data = await getNameDescription(userInformation.userId);

		if (data) setData(data);
	};
	useEffect(() => {
		startTranstion(() => {
			getNamebio();
		});
	}, [userInformation.callNameDescription]);
	return (
		<div className=" lg:max-w-[500px] m-1 ">
			<BackgroundProfilePhoto></BackgroundProfilePhoto>
			<UserProfilePhoto></UserProfilePhoto>
			{/* {!isPending ? ( */}
			<CardHeader className="mt-[-40px]">
				<CardTitle className=" text-3xl">{data?.name}</CardTitle>
				<CardDescription className="mb-1">{data?.bio}</CardDescription>
			</CardHeader>
			{/* ) : ( */}
			{/* // 	<NameDescriptionSkeletonLoader></NameDescriptionSkeletonLoader> */}
			{/* // )} */}
		</div>
	);
};

export default UserProfilePhotoContainer;
