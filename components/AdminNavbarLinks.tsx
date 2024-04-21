"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hook/CurrentUserSession";
import Link from "next/link";

const AdminNavbarLinks = () => {
	const admin = useCurrentUser();
	return (
		<div className="flex justify-end items-end">
			{admin?.role === "admin" && (
				<div>
					<Link href="/dashboard" className="mt-1">
						<Button variant="ghost">Dashboard</Button>
					</Link>
					<Link href={`/${admin?.username}`}>
						<Button variant="ghost" className="mt-1">
							My profile
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default AdminNavbarLinks;
