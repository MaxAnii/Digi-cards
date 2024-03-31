"use client";
import NavbarContainer from "@/components/NavbarContainer";
import ProfileContainer from "@/components/ProfileContainer";
import AuthButtons from "@/components/AuthButtons";
import { useParams } from "next/navigation";

function page() {
	const param = useParams();
	console.log(param.username); // fetch the user details

	return (
		<div>
			<NavbarContainer>
				<AuthButtons></AuthButtons>
			</NavbarContainer>
			<ProfileContainer></ProfileContainer>
		</div>
	);
}

export default page;
