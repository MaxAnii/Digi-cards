import { Card } from "./ui/card";
import { FiEdit } from "react-icons/fi";
const EditProfileButton = () => {
	return (
		<Card className="md:h-[80px] md:w-[80px] h-[80px] w-[70px] mt-10  md:mx-5 p-5 mx-3 dark:bg-slate-300 dark:text-black">
			<FiEdit size="3-xl" />
		</Card>
	);
};

export default EditProfileButton;
