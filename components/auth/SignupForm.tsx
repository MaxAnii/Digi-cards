"use client";
import { signupSchema } from "@/schemas";
import * as z from "zod";
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
import { Button } from "@/components/ui/button";
import { signup } from "@/actions/signup";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FormSubmissionSpinner from "@/components/FormSubmissionSpinner";
const SignupForm = () => {
	const params = useSearchParams();
	const username = params.get("username");
	const [message, setMessage] = useState<String>("");
	const [isPending, setTransition] = useTransition();
	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			username: username || "random",
			email: "",
			password: "",
			confrimPassword: "",
		},
	});
	const onsubmit = async (values: z.infer<typeof signupSchema>) => {
		setMessage("");
		if (values.confrimPassword !== values.password) {
			setMessage("Password is not matching");
			return;
		}
		setTransition(() => {
			signup(values).then((data: any) => {
				if (data) {
					setMessage(data.message);
				}
			});
		});
	};
	return (
		<Form {...form}>
			<Button>{"<-- Back"}</Button>
			<form className="space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
				<Link href="/username"></Link>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>User name</FormLabel>
							<FormControl>
								<Input disabled type="text" {...field}></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ansar@example.com"
									type="email"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
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
									placeholder="********"
									type="password"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confrimPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confrim Password</FormLabel>
							<FormControl>
								<Input
									placeholder="********"
									type="password"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<div className="text-red-700">{message}</div>
				{!isPending ? (
					<Button type="submit" className="w-full" disabled={isPending}>
						Create an account
					</Button>
				) : (
					<FormSubmissionSpinner></FormSubmissionSpinner>
				)}
			</form>
		</Form>
	);
};

export default SignupForm;
