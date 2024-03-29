"use client";
import NavbarContainer from "@/components/NavbarContainer";
import ProfileContainer from "@/components/ProfileContainer";
import { useParams } from "next/navigation";

function page() {
	const param = useParams();
	console.log(param.username); // fetch the user details

	return (
		<div>
			<NavbarContainer>
				<></>
			</NavbarContainer>
			<ProfileContainer></ProfileContainer>
		</div>
	);
}

export default page;
