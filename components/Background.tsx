import background from "@/public/background.png";
import Image from "next/image";
import UserPhoto from "./UserPhoto";
const Background = () => {
	return (
		<div>
			<div className="">
				<Image
					src={background}
					alt="fds"
					className="max-h-[200px] min-w-[100%]"
				/>
			</div>
			<UserPhoto></UserPhoto>
		</div>
	);
};

export default Background;
