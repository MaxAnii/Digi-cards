"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useCurrentUser } from "@/hook/CurrentUserSession";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
	const user = useCurrentUser();
	const router = useRouter();
	return (
		<>
			{user ? (
				<Button
					className="pl-2  text-sm"
					onClick={() => {
						signOut();
						router.push("/");
					}}
				>
					Logout
				</Button>
			) : (
				<>
					<Link href="/signin">
						<Button className="p-2  text-sm w-[60px] mr-4">Sign in</Button>
					</Link>
					<Link href="/username">
						<Button className="p-2  text-sm w-[60px] mr-4" variant="secondary">
							Sign up
						</Button>
					</Link>
				</>
			)}
		</>
	);
};

export default AuthButtons;
