import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useContext, useState, useTransition } from "react";
import { updatePhoto } from "@/actions/updateInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
function ChangeBannerPhoto() {
	const userInformation = useContext(UserInformationContext);
	const [bannerPhoto, setBannerPhoto] = useState<FormData>();
	const [isPending, startTranstion] = useTransition();
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && file.type.startsWith("image/")) {
			const formData = new FormData();
			formData.append("backgroundPhoto", file);
			setBannerPhoto(formData);
		} else {
			alert("Please select a valid image file.");
		}
	};
	const uploadBannerPhoto = async (event: any) => {
		event.preventDefault();

		if (bannerPhoto) {
			startTranstion(async () => {
				await updatePhoto(bannerPhoto, "backgroundPhoto");
				userInformation.setCallBackgroundPhoto((prev) => !prev);
			});
		}
	};
	return (
		<div className="  items-center gap-1.5  my-2">
			<form>
				<Label htmlFor="picture">Backgroun Photo</Label>
				<div className="flex w-full  items-center md:space-x-5 space-x-1">
					<Input
						id="picture"
						type="file"
						accept="image/*"
						className="bg-white/15"
						onChange={handleFileChange}
						required
					/>
					<Button
						onClick={uploadBannerPhoto}
						type="submit"
						disabled={isPending}
					>
						update
					</Button>
				</div>
			</form>
		</div>
	);
}

export default ChangeBannerPhoto;
