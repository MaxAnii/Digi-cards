import { useCurrentUser } from "@/hook/CurrentUserSession";
import { Card } from "./ui/card";
import { FiEdit } from "react-icons/fi";
import { useParams } from "next/navigation";
const EditProfileButton = () => {
	const params = useParams();
	const user = useCurrentUser();
	return (
		<>
			{user?.username! == params.username ? (
				<Card className="md:h-[50px] md:w-[50px] h-[50px] w-[50px] bg-black text-white   p-3   hover:translate-y-2">
					<FiEdit size="2-xl" />
				</Card>
			) : (
				<></>
			)}
		</>
	);
};

export default EditProfileButton;
