"use clinet";
import { Input } from "../ui/input";
import { LineWave } from "react-loader-spinner";
import { useEffect, useState, useTransition } from "react";
import { Label } from "../ui/label";
import { checkUsernameExists } from "@/actions/checkUsername";
import Link from "next/link";
import { Button } from "../ui/button";
// import FormSubmissionSpinner from "../FormSubmissionSpinner";
const UserNameForm = () => {
	const [messsage, setMessage] = useState<String | undefined>("");
	const [username, setUsername] = useState<string>("");
	const [showNextButton, setShowNextButton] = useState<boolean>(false);
	const [isPending, setTransiton] = useTransition();
	const onChange = async () => {
		if (username.length === 0) return;
		const usernameRegex = /^[a-zA-Z0-9_]+$/;
		const isValidUsername = usernameRegex.test(username);

		if (!isValidUsername)
			return setMessage(
				"User name should not contain any spaces and special characters"
			);
		const usernameExists = await checkUsernameExists(username);

		if (usernameExists) return setMessage("username is already taken");
		else setShowNextButton(true);
	};
	useEffect(() => {
		setMessage("");
		setShowNextButton(false);
		const checkUsenname = setTimeout(() => {
			setTransiton(() => onChange());
		}, 2000);
		return () => clearTimeout(checkUsenname);
	}, [username]);
	return (
		<>
			<Label>User name</Label>
			<div className="flex gap-x-3 ">
				<Input
					placeholder="ansar@example.com"
					onChange={(e) => setUsername(e.target.value)}
					className="my-2 pr-12"
					disabled={isPending}
				></Input>
				<div className="my-[-38px] mx-[-65px]">
					{isPending && (
						<LineWave color="#9CAFAA" ariaLabel="line-wave-loading" />
					)}
				</div>
			</div>
			<div className="text-red-700 mt-2 text-sm ">{messsage}</div>
			{showNextButton && (
				<Link
					href={`signup/?username=${username}`}
					className="mt-2 text-blue-500 underline"
				>
					<Button className="w-full">Grab my link</Button>
				</Link>
			)}
		</>
	);
};

export default UserNameForm;
