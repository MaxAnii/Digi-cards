import { Card, CardHeader } from "@/components/ui/card";
import { InfinitySpin } from "react-loader-spinner";
const ProfileLoading = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<Card>
				<InfinitySpin width="200" color="#9CAFAA" />
				<CardHeader className="text-center">Loading Profile</CardHeader>
			</Card>
		</div>
	);
};

export default ProfileLoading;
