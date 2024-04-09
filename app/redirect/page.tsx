"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { useCurrentUser } from "@/hook/CurrentUserSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
const CheckRoute = () => {
	const route = useRouter();
	const user = useCurrentUser();
	useEffect(() => {
		if (user?.role === "user") {
			route.push(`/${user.username}`);
		}
		if (user?.role === "admin") {
			route.push(`/dashboard`);
		}
		if (!user) route.push("/");
	}, []);
	return (
		<div className="flex justify-center items-center h-screen">
			<Card>
				<InfinitySpin width="200" color="#9CAFAA" />
				<CardHeader className="text-center">Loading Profile</CardHeader>
			</Card>
		</div>
	);
};

export default CheckRoute;
