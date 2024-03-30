import Image from "next/image";
import facebook from "@/public/facebook.svg";
const UserProfilePhoto = () => {
	return (
		<div className="relative md:top-[-50px] top-[-20px] ">
			<Image
				className=" md:max-w-[20%] max-w-[20%] rounded-full border-5 border-[#f7f7f7] dark:dark:bg-slate-300 z-0 "
				alt="user profile"
				src={facebook}
			/>
		</div>
	);
};

export default UserProfilePhoto;
