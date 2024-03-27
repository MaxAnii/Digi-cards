import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import facebook from "@/public/facebook.svg";
import github from "@/public/github.svg";
import gmail from "@/public/gmail.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import pinterest from "@/public/pinterest.svg";
import snapchat from "@/public/snapchat.svg";
import telegram from "@/public/telegram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import Image from "next/image";
const UserProfilePhoto = () => {
	const socialIcons = [
		facebook,
		github,
		gmail,
		instagram,
		linkedin,
		pinterest,
		snapchat,
		telegram,
		whatsapp,
		twitter,
	];
	return (
		<>
			{socialIcons.map((elem, index) => {
				return (
					<Card
						key={index}
						className="md:h-[80px] md:w-[80px] h-[80px] w-[70px] mt-10  md:mx-5 p-5 mx-3 dark:bg-slate-300"
					>
						<Image src={elem} alt="favicon"></Image>
						<p className="text-center">{}</p>
					</Card>
				);
			})}
		</>
	);
};

export default UserProfilePhoto;
