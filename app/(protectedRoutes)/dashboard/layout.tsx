import AdminNavbarLinks from "@/components/AdminNavbarLinks";
import AuthButtons from "@/components/AuthButtons";
import NavbarContainer from "@/components/NavbarContainer";
import UserListProvider from "@/hook/UserListContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<UserListProvider>
				<NavbarContainer>
					<AdminNavbarLinks></AdminNavbarLinks>

					<AuthButtons></AuthButtons>
				</NavbarContainer>
				{children}
			</UserListProvider>
		</div>
	);
};

export default layout;
