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
import { resetPasswordSchema } from "@/schemas";
import { Button } from "@/components/ui/button";

import { useState, useTransition } from "react";
import FormSubmissionSpinner from "@/components/FormSubmissionSpinner";
import { resetPassword } from "@/actions/resetPassword";
import { useSearchParams } from "next/navigation";
const ResetPasswordForm = () => {
	const params = useSearchParams();
	const token = params.get("token");
	const [messsage, setMessage] = useState<String | undefined>("");

	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
		},
	});
	const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
		setMessage("");
		startTransition(() => {
			resetPassword(values, token).then((data: any) => {
				if (data) setMessage(data.message);
			});
		});
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="xxxxxxxx"
									{...field}
									disabled={isPending}
									type="password"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="text-red-700">{messsage}</div>
				{!isPending ? (
					<Button type="submit" className="w-full">
						Reset Password
					</Button>
				) : (
					<FormSubmissionSpinner></FormSubmissionSpinner>
				)}
			</form>
		</Form>
	);
};

export default ResetPasswordForm;
