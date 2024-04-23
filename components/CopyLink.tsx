import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
const CopyLink = () => {
	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		toast({
			title: "link copied",
			duration: 3000,
		});
	};
	return (
		<Button variant="outline" value="personal" onClick={copyLink}>
			Copy my link
		</Button>
	);
};

export default CopyLink;
