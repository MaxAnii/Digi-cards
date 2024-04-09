import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateEmailSchema } from "@/schemas";
import { useTransition } from "react";
import { useCurrentUser } from "@/hook/CurrentUserSession";
import { updateEmail } from "@/actions/updatePersonalInformation";
import { useSession } from "next-auth/react";
const UpdateCredentialEmail = () => {
	const { toast } = useToast();
	const { update } = useSession();
	const user = useCurrentUser();
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof updateEmailSchema>>({
		resolver: zodResolver(updateEmailSchema),
		defaultValues: {
			email: user?.email || "",
		},
	});

	async function onSubmit(values: z.infer<typeof updateEmailSchema>) {
		startTransition(async () => {
			const data = await updateEmail(values);
			if (data?.message === "Email updated") {
				await update();
				toast({
					title: data?.message,
				});
			} else {
				toast({
					variant: "destructive",
					title: data?.message,
				});
			}
		});
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ansar@exmaple.com"
									{...field}
									className="bg-white/15"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={isPending}>
					Update
				</Button>
			</form>
		</Form>
	);
};

export default UpdateCredentialEmail;
