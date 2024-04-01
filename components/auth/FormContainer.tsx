"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
// import { FaGoogle } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
type propsType = {
	children: React.ReactNode;
	title: string;
	backButtonLabel: string;
	backButtonhref: string;
};
// import { signIn } from "next-auth/react"; // auth for the client side
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const FormContainer = ({
	children,
	title,
	backButtonLabel,
	backButtonhref,
}: propsType) => {
	//   const googleAuth = () => {
	//     signIn("google", {
	//       callbackUrl: DEFAULT_LOGIN_REDIRECT,
	//     });
	//   };
	return (
		<div className=" ">
			<Card className="  shadow-md md:w-[400px] w-[300px]">
				<CardHeader className="text-center">{title}</CardHeader>
				<CardContent>{children}</CardContent>
				<CardFooter className="gap-x-2">
					{/* <Button variant="secondary" className="w-[50%]" onClick={googleAuth}>
						<FaGoogle size={20}></FaGoogle>
					</Button>
					<Button variant="secondary" className="w-[50%] ">
						<Link href="/whatsAppAuth">
							<FaWhatsapp size={20}></FaWhatsapp>
						</Link>
					</Button> */}
				</CardFooter>
				<CardFooter>
					<Link href={backButtonhref}>
						<Button variant="link">{backButtonLabel}</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default FormContainer;
