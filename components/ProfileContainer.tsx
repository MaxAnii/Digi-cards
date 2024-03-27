import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import UserProfilePhoto from "./UserProfilePhoto";
import Background from "./Background";

const ProfileContainer = () => {
	return (
		<>
			<div className="flex justify-center m-5">
				<Card className=" sm:max-w-[85vw] md:max-w-[800px] drop-shadow-2xl">
					<Background></Background>
					<CardHeader className="mt-[-25px]">
						<CardTitle className="italic ">Ansar</CardTitle>
						<CardDescription className="">
							Small description of user Irure elit dolore labore Lorem duis
							Lorem labore ut aliqua ea reprehenderit non consectetur laborum.
							Minim cillum nostrud irure qui ex laboris.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<CardTitle className="md:mt-[px] ">Get in touch :-</CardTitle>
						<div className="flex flex-wrap justify-center lg:gap-5 ">
							<UserProfilePhoto></UserProfilePhoto>
						</div>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default ProfileContainer;
