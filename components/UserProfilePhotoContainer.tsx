import { CardDescription, CardHeader, CardTitle } from "./ui/card";

import BackgroundProfilePhoto from "./BackgroundProfilePhoto";
const UserProfilePhotoContainer = () => {
	return (
		<div className=" lg:max-w-[500px] m-1 ">
			<BackgroundProfilePhoto></BackgroundProfilePhoto>
			<CardHeader className="mt-[-25px]">
				<CardTitle className="italic text-3xl">Ansar</CardTitle>
				<CardDescription className="">
					Small description of user Irure elit dolore labore Lorem duis Lorem
					labore ut aliqua ea reprehenderit non consectetur laborum. Minim
					cillum nostrud irure qui ex laboris.
				</CardDescription>
			</CardHeader>
		</div>
	);
};

export default UserProfilePhotoContainer;
