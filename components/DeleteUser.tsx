"use client";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { deleteUser } from "@/actions/user";
const DeleteUser = ({
	...props
}: {
	id: string;
	setCallFunction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isPending, startTransition] = useTransition();
	const clickHandler = () => {
		startTransition(async () => {
			const data = await deleteUser(props.id);
			if (data) props.setCallFunction((prev) => !prev);
		});
	};
	return (
		<div>
			<Button variant="destructive" onClick={clickHandler} disabled={isPending}>
				<MdOutlineDeleteSweep size="1.5rem" />
			</Button>
		</div>
	);
};

export default DeleteUser;
