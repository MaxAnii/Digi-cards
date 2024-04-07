import UserInformationProvider from "@/hook/userInformationContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<UserInformationProvider>{children}</UserInformationProvider>
		</div>
	);
};

export default layout;
