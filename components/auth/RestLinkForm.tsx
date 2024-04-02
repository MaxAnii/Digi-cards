"use clinet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import * as z from "zod";
import { resetSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import FormSubmissionSpinner from "@/components/FormSubmissionSpinner";
import { sendResetToken } from "@/actions/reset-token";
const ResetLinkForm = () => {
	const [messsage, setMessage] = useState<String | undefined>("");

	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof resetSchema>>({
		resolver: zodResolver(resetSchema),
		defaultValues: {
			email: "",
		},
	});
	const onSubmit = (values: z.infer<typeof resetSchema>) => {
		setMessage("");
		startTransition(() => {
			sendResetToken(values).then((data: any) => {
				if (data) setMessage(data.message);
			});
		});
	};
	return (
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
									disabled={isPending}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="text-red-700">{messsage}</div>
				{!isPending ? (
					<Button type="submit" className="w-full">
						Get reset link
					</Button>
				) : (
					<FormSubmissionSpinner></FormSubmissionSpinner>
				)}
			</form>
		</Form>
	);
};

export default ResetLinkForm;
