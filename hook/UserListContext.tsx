"use client";
import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useTransition,
} from "react";
import { getUsersList } from "@/actions/user";

export type userData = {
	id: string | null;
	username: string | null;
	name: string | null;
	email: string | null;
	image: string | null;
};

type userDataType = userData[] | undefined;

type UserListContextType = {
	data: userDataType;
	setCallFunction: React.Dispatch<React.SetStateAction<boolean>>;
	gettingUserList: Boolean;
};

export const UserListContext = createContext<UserListContextType>({
	data: undefined,
	setCallFunction: () => {},
	gettingUserList: false,
});

const UserListProvider = ({ children }: { children: ReactNode }) => {
	const [gettingUserList, startTransition] = useTransition();
	const [data, setData] = useState<userDataType>();
	const [callFunction, setCallFunction] = useState<boolean>(false);

	const getList = async () => {
		const userList = await getUsersList();
		console.log(userList);
		setData(userList);
	};

	useEffect(() => {
		startTransition(async () => {
			await getList();
		});
	}, [callFunction]);

	return (
		<UserListContext.Provider
			value={{ data, setCallFunction, gettingUserList }}
		>
			{children}
		</UserListContext.Provider>
	);
};

export default UserListProvider;
