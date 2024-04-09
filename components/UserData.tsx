import { useContext } from "react";
import { UserListContext } from "@/hook/UserListContext";
import ListUserTable from "@/components/ListUserTable";
import { Triangle } from "react-loader-spinner";
const UserData = () => {
	const groupList = useContext(UserListContext);
	return (
		<div className=" my-4 h-[80vh]  p-2 md:mx-[15vw]  md:p-4">
			{!groupList.gettingUserList ? (
				<ListUserTable></ListUserTable>
			) : (
				<div className="flex h-[80vh] items-center justify-center">
					<Triangle
						height="80"
						width="80"
						color="#9CAFAA"
						ariaLabel="triangle-loading"
					/>
				</div>
			)}
		</div>
	);
};

export default UserData;
