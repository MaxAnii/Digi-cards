"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useContext, useState, useTransition } from "react";
import { updatePhoto } from "@/actions/updateInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { toast } from "./ui/use-toast";
function ChangeProfilePhoto() {
	const userInformation = useContext(UserInformationContext);
	const [isPending, startTranstion] = useTransition();
	const [userPhoto, setuserPhoto] = useState<FormData>();
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const maxSize = 9 * 1024 * 1024;

		if (file && file.size > maxSize) {
			toast({
				variant: "destructive",
				title: "Please select an image file smaller than 2MB.",
				duration: 3000,
			});
			event.target.value = "";
			return;
		}
		if (file && file.type.startsWith("image/")) {
			const formData = new FormData();
			formData.append("profilePhoto", file);
			setuserPhoto(formData);
		} else {
			alert("Please select a valid image file.");
		}
	};
	const uploaduserPhoto = async (event: any) => {
		event.preventDefault();

		if (userPhoto) {
			startTranstion(async () => {
				const response = await updatePhoto(userPhoto, "profilePhoto");
				if (response?.imageBuffer) {
					userInformation.setProfilePhoto(response.imageBuffer);
					toast({
						title: response.message,
						duration: 3000,
					});
				} else {
					toast({
						title: response?.message,
						duration: 3000,
						variant: "destructive",
					});
				}
			});
		}
	};
	return (
		<div className="  items-center gap-1.5  my-2">
			<form>
				<Label htmlFor="picture">User Photo</Label>
				<div className="flex w-full  items-center md:space-x-5 space-x-1">
					<Input
						id="picture"
						type="file"
						accept="image/*"
						className="bg-white/15"
						onChange={handleFileChange}
						required
					/>
					<Button onClick={uploaduserPhoto} type="submit" disabled={isPending}>
						update
					</Button>
				</div>
			</form>
		</div>
	);
}

export default ChangeProfilePhoto;
