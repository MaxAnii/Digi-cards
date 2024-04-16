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
	// const [data, setData] = useState<{
	// 	name: string | null;
	// 	bio: string | null;
	// }>();
	// const getNamebio = async () => {
	// 	const data = await getNameDescription(userInformation.userId);

	// 	if (data) setData(data);
	// };
	// useEffect(() => {
	// 	startTranstion(() => {
	// 		getNamebio();
	// 	});
	// }, [userInformation.callNameDescription]);

	return (
		<div className=" lg:max-w-[500px] m-1 ">
			<BackgroundProfilePhoto></BackgroundProfilePhoto>
			<UserProfilePhoto></UserProfilePhoto>

			<CardHeader className="mt-[-40px]">
				<CardTitle className=" text-3xl">{userInformation.userName}</CardTitle>
				<CardDescription className="mb-1">
					{userInformation.userbio}
				</CardDescription>
			</CardHeader>
		</div>
	);
};

export default UserProfilePhotoContainer;
