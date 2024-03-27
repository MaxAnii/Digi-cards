import Image from "next/image";
import facebook from "@/public/facebook.svg";
const UserPhoto = () => {
	return (
		<div className="relative top-[-50px]  ">
			<Image
				className=" md:max-w-[20%] max-w-[27%] rounded-full border-8 border-[#f7f7f7] dark:dark:bg-slate-300 "
				alt="user profile"
				src={facebook}
			/>
		</div>
	);
};

export default UserPhoto;
