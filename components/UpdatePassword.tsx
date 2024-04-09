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
import { updatePasswordSchema } from "@/schemas";
import { useTransition } from "react";
import { updatePassword } from "@/actions/updatePersonalInformation";
const UpdateUserPassword = () => {
	const { toast } = useToast();
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof updatePasswordSchema>>({
		resolver: zodResolver(updatePasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof updatePasswordSchema>) {
		startTransition(async () => {
			const data = await updatePassword(values);
			if (data?.message === "Password updated") {
				form.setValue("password", "");
				toast({
					title: data?.message,
				});
			} else
				toast({
					variant: "destructive",
					title: data?.message,
				});
		});
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>New password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="xxxxxxxx"
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

export default UpdateUserPassword;
