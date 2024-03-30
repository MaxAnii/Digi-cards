import background from "@/public/background.png";
import Image from "next/image";
import UserProfilePhoto from "./UserProfilePhoto";
const BackgroundProfilePhoto = () => {
	return (
		<div className="lg:w-[50vw]">
			<div className="">
				<Image
					src={background}
					alt="fds"
					className="max-h-[400px] min-w-[100%] "
				/>
			</div>
			<UserProfilePhoto></UserProfilePhoto>
		</div>
	);
};

export default BackgroundProfilePhoto;
