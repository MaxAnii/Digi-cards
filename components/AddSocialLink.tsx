import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { addNewSocialLink } from "@/actions/AddSocialLink";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext, useTransition } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { addNewSocialLinkSchema } from "@/schemas";
import { UserInformationContext } from "@/hook/userInformationContext";
const AddSocialLink = () => {
	const userInformation = useContext(UserInformationContext);
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof addNewSocialLinkSchema>>({
		resolver: zodResolver(addNewSocialLinkSchema),
		defaultValues: {
			link: "",
		},
	});
	const onSubmit = async (values: z.infer<typeof addNewSocialLinkSchema>) => {
		startTransition(async () => {
			const data = await addNewSocialLink(values);
			userInformation.setCallSocialLinks((prev) => !prev);
			form.setValue("link", "");
		});
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
				<FormField
					control={form.control}
					name="link"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex">
								Link <IoShareSocialOutline />
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
				<Button className="px-5 ml-auto" type="submit" disabled={isPending}>
					Add
					<IoMdAddCircleOutline />
				</Button>
			</form>
		</Form>
	);
};

export default AddSocialLink;
