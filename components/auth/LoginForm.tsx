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
import { loginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import FormSubmissionSpinner from "@/components/FormSubmissionSpinner";
const LoginForm = () => {
	const [messsage, setMessage] = useState<String | undefined>("");

	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		setMessage("");
		startTransition(() => {
			login(values).then((data: any) => {
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
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="******"
									{...field}
									type="password"
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
						Sign In
					</Button>
				) : (
					<FormSubmissionSpinner></FormSubmissionSpinner>
				)}
			</form>
		</Form>
	);
};

export default LoginForm;
