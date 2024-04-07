import { useCurrentUser } from "@/hook/CurrentUserSession";
import { Card } from "./ui/card";
import { FiEdit } from "react-icons/fi";
import { useParams } from "next/navigation";
const EditProfileButton = () => {
	const params = useParams();
	const user = useCurrentUser();
	return (
		<>
			{user?.username !	== params.username ? (
				<Card className="md:h-[50px] md:w-[50px] h-[50px] w-[50px]   p-3  dark:bg-slate-300 dark:text-black">
					<FiEdit size="2-xl" />
				</Card>
			) : (
				<></>
			)}
		</>
	);
};

export default EditProfileButton;
