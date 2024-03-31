"use client";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/emailverification";
import { useEffect, useState, useTransition } from "react";
import FormContainer from "@/components/auth/FormContainer";
import { InfinitySpin } from "react-loader-spinner";
const Page = () => {
	const [isPending, setTransiton] = useTransition();
	const [message, setMessage] = useState("");
	const [messageClass, setMessageClass] = useState("");
	const params = useSearchParams();
	const token = params.get("token");
	const confrimToken = () => {
		if (!token) return;
		newVerification(token).then((data) => {
			if (data?.message === "verified") {
				setMessage("Your email is verified");
				setMessageClass("green");
			} else {
				setMessageClass("red");

				setMessage(data.message);
			}
		});
	};
	useEffect(() => {
		setTransiton(() => {
			confrimToken();
		});
	}, []);
	return (
		<div className="flex h-screen items-center justify-center">
			<FormContainer
				title="verifying your email"
				backButtonLabel="Back to login !!"
				backButtonhref="/signin"
			>
				<div>
					{isPending ? (
						<div className="flex justify-center pl-0">
							<InfinitySpin width="200" color="#9CAFAA" />
						</div>
					) : (
						<div
							className={`text-xl text-${messageClass}-600  mt-2 rounded-xl bg-gray-800 p-6 text-center `}
						>
							{message}
						</div>
					)}
				</div>
			</FormContainer>
		</div>
	);
};

export default Page;
