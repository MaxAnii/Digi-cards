"use client";
import NavbarContainer from "@/components/NavbarContainer";
import ProfileContainer from "@/components/ProfileContainer";
import AuthButtons from "@/components/AuthButtons";
import { useParams } from "next/navigation";
import AdminNavbarLinks from "@/components/AdminNavbarLinks";
import { useContext, useEffect, useState } from "react";
import { getUserIdByUsername } from "@/actions/userInformation";
import NoUserFound from "@/components/NoUserFound";
import { UserInformationContext } from "@/hook/userInformationContext";
function page() {
	const userInformation = useContext(UserInformationContext);
	const [showuser, setShowUser] = useState<Boolean>(false);

	const param = useParams();
	const userName = param.username.toString();
	const userExists = async () => {
		const data = await getUserIdByUsername(userName);
		if (data) {
			setShowUser(true);
			userInformation.setUserId(data);
		}
	};
	useEffect(() => {
		userExists();
	}, []);
	return (
		<div>
			<NavbarContainer>
				<AdminNavbarLinks></AdminNavbarLinks>
				<AuthButtons></AuthButtons>
			</NavbarContainer>
			{showuser ? (
				<ProfileContainer></ProfileContainer>
			) : (
				<NoUserFound></NoUserFound>
			)}
		</div>
	);
}

export default page;
