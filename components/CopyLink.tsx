import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { QRCode } from "react-qrcode-logo";

const CopyLink = () => {
	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		toast({
			title: "link copied",
			duration: 3000,
		});
	};
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div>
					<QRCode value={window.location.href} />
					<Button
						variant="outline"
						value="personal"
						onClick={copyLink}
						className="bg-black text-white ml-[20%] mt-5"
					>
						Copy my link
					</Button>
				</div>
			</div>
		</>
	);
};

export default CopyLink;
