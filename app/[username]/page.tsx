"use client";
import NavbarContainer from "@/components/NavbarContainer";
import ProfileContainer from "@/components/ProfileContainer";
import AuthButtons from "@/components/AuthButtons";
import { useParams, useRouter } from "next/navigation";
import AdminNavbarLinks from "@/components/AdminNavbarLinks";
import { useContext, useEffect, useState, useTransition } from "react";
import { getUserIdByUsername } from "@/actions/userInformation";

import { UserInformationContext } from "@/hook/userInformationContext";
import ProfileLoading from "@/components/ProfileLoading";
function Page() {
	const router = useRouter();
	const userInformation = useContext(UserInformationContext);
	const [showuser, setShowUser] = useState<Boolean>(false);
	const [isPending, startTransiton] = useTransition();
	const param = useParams();
	const userName = param.username.toString();
	const userExists = async () => {
		const data = await getUserIdByUsername(userName);
		if (data) {
			userInformation.setUserId(data);
			setShowUser(true);
		} else router.push("/nouserfound");
	};
	useEffect(() => {
		startTransiton(() => {
			userExists();
		});
	}, []);
	return (
		<div>
			{!isPending ? (
				<>
					<NavbarContainer>
						<AdminNavbarLinks></AdminNavbarLinks>
						<AuthButtons></AuthButtons>
					</NavbarContainer>
					{showuser ? <ProfileContainer></ProfileContainer> : <></>}
				</>
			) : (
				<ProfileLoading></ProfileLoading>
			)}
		</div>
	);
}

export default Page;
