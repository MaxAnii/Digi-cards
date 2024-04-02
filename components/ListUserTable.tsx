"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NoUserMessage from "@/components/NoUserMessage";
import { useContext } from "react";
import { UserListContext } from "@/hook/UserListContext";
import DeleteUser from "@/components/DeleteUser";
import { useRouter } from "next/navigation";
const ListUserTable = () => {
	const userList = useContext(UserListContext);
	const router = useRouter();
	return (
		<div>
			{userList.data?.length ? (
				<Table>
					<TableCaption>A list of Users</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px] p-4">Icon</TableHead>
							<TableHead className=" p-4">Name</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{userList.data.map((item: any, index: number) => {
							return (
								<TableRow key={index}>
									<TableCell className="p-4 font-medium">
										<Avatar>
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</TableCell>
									<TableCell
										className=" pl-4 underline cursor-pointer"
										onClick={() => router.push(`/${item.username}`)}
									>
										{item.username}
									</TableCell>
									<TableCell className="flex justify-end p-4 ">
										<DeleteUser
											id={item.id}
											setCallFunction={userList.setCallFunction}
										/>
									</TableCell>
									<TableCell className=" "></TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			) : (
				<NoUserMessage></NoUserMessage>
			)}
		</div>
	);
};

export default ListUserTable;
