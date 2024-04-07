import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext, useTransition } from "react";
import { updateSocialLinkSchema } from "@/schemas";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
	deleteSocialLink,
	updateSocialLink,
} from "@/actions/updateInformation";
import { UserInformationContext } from "@/hook/userInformationContext";

const SocialMediaLinkForm = (props: { id: string; link: string }) => {
	const userInformation = useContext(UserInformationContext);
	const [isPending, startTranstion] = useTransition();
	const form = useForm<z.infer<typeof updateSocialLinkSchema>>({
		resolver: zodResolver(updateSocialLinkSchema),
		defaultValues: {
			id: props.id,
			link: props.link,
		},
	});
	const link = new URL(props.link).hostname;
	const onSubmit = (values: z.infer<typeof updateSocialLinkSchema>) => {
		startTranstion(async () => {
			const data = await updateSocialLink(values);
			userInformation.setCallSocialLinks((prev) => !prev);
		});
	};
	const deleteLink = async () => {
		startTranstion(async () => {
			const data = await deleteSocialLink(props.id);
			userInformation.setCallSocialLinks((prev) => !prev);
		});
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="   items-center gap-1.5 my-2"
			>
				<FormField
					control={form.control}
					name="link"
					render={({ field }) => (
						<FormItem className="flex gap-2">
							<FormLabel className="mt-2">
								<Avatar>
									<AvatarImage
										src={`https://special-harlequin-squid.faviconkit.com/${link}/356`}
									></AvatarImage>
								</Avatar>
							</FormLabel>
							<FormControl className="">
								<Input
									placeholder="https://..."
									{...field}
									className="bg-white/15"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex gap-3 ml-auto">
					<Button type="submit" className="ml-auto" disabled={isPending}>
						update
					</Button>
					<Button
						variant="destructive"
						onClick={deleteLink}
						disabled={isPending}
					>
						Delete
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default SocialMediaLinkForm;
