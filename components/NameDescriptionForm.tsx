"use client";
import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { nameDescriptionSchema } from "@/schemas";
import { Textarea } from "./ui/textarea";
import { useContext, useTransition } from "react";
import { updateNameDescription } from "@/actions/updateInformation";
import { getNameDescription } from "@/actions/userInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { toast } from "./ui/use-toast";
export function NameDescriptionForm() {
	const userInformation = useContext(UserInformationContext);
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof nameDescriptionSchema>>({
		resolver: zodResolver(nameDescriptionSchema),
		defaultValues: {
			id: userInformation.userId || "",
			name: "",
			description: "",
		},
	});
	const getNamebio = async () => {
		if (!userInformation.userId) return;
		// const data = await getNameDescription(userInformation.userId);

		if (userInformation.userName) {
			form.setValue("name", userInformation.userName);
		}
		if (userInformation.userbio) {
			form.setValue("description", userInformation.userbio);
		}
	};
	useEffect(() => {
		getNamebio();
	}, []);
	async function onSubmit(values: z.infer<typeof nameDescriptionSchema>) {
		startTransition(async () => {
			const data = await updateNameDescription(values);
			if (data?.message === "profile updated") {
				userInformation.setUserBio(values.description);
				userInformation.setUserName(values.name);
				toast({
					title: data.message,
					duration: 3000,
				});
				return;
			} else {
				toast({
					title: "Something went wrong!",
					duration: 3000,
					variant: "destructive",
				});
			}
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Ex: Ansar"
									{...field}
									className="bg-white/15"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-left">Bio</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Small Description"
									{...field}
									className="bg-white/15"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full" disabled={isPending}>
					Update
				</Button>
			</form>
		</Form>
	);
}
