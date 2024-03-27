"use client";
import ProfileContainer from "@/components/ProfileContainer";
import { useParams } from "next/navigation";

function page() {
	const param = useParams();
	console.log(param.username); // fetch the user details

	return (
		<div>
			<ProfileContainer></ProfileContainer>
		</div>
	);
}

export default page;
