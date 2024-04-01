"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hook/CurrentUserSession";
import Link from "next/link";

const AdminNavbarLinks = () => {
	const admin = useCurrentUser();
	return (
		<div>
			{admin?.role === "admin" && (
				<>
					<Link href="/dashboard">
						<Button variant="ghost">Dashboard</Button>
					</Link>
					<Link href={`/${admin?.username}`}>
						<Button variant="ghost">My profile</Button>
					</Link>
				</>
			)}
		</div>
	);
};

export default AdminNavbarLinks;
