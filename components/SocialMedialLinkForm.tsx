import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import Input from "postcss/lib/input";
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
import youtube from "@/public/youtube.svg";
const SocialMedialLinkForm = () => {
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
		youtube,
	];
	const onSubmit = () => {};
	return (
		<div>
			{/* 
<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ansar@example.com"
									{...field}
									// disabled={isPending}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
                </form>
                </Form> */}
		</div>
	);
};

export default SocialMedialLinkForm;
