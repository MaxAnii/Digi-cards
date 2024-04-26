"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
type propsType = {
	children: React.ReactNode;
	title: string;
	backButtonLabel: string;
	backButtonhref: string;
};
const FormContainer = ({
	children,
	title,
	backButtonLabel,
	backButtonhref,
}: propsType) => {
	return (
		<div className=" ">
			<Card className="  shadow-md md:w-[400px] w-[300px] mt-4 custom-blur">
				<CardHeader className="text-center">{title}</CardHeader>
				<CardContent>{children}</CardContent>
				<CardFooter className="gap-x-2"></CardFooter>
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
