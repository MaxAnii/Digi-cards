"use client";

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
import { basicDetailsSchema } from "@/schemas";
import CountryCodeDropdown from "./CountryCode";
import { useContext, useEffect, useState, useTransition } from "react";
import { updateBasicDetails } from "@/actions/updateInformation";
import { UserInformationContext } from "@/hook/userInformationContext";
import { getMainLinks } from "@/actions/userInformation";
export function MainContactLinksForm() {
	const userInformation = useContext(UserInformationContext);
	const [isPending, startTransition] = useTransition();
	const [countryCodePhoneNumber, setCountryCodePhoneNumber] =
		useState<string>("");
	const [countryCodeWhatsApp, setCountryCodeWhatsApp] = useState<string>("");
	const form = useForm<z.infer<typeof basicDetailsSchema>>({
		resolver: zodResolver(basicDetailsSchema),
		defaultValues: {
			phoneNumber: "",
			whatsappNumber: "",
			email: "",
		},
	});
	const getLinks = async () => {
		const data = await getMainLinks(userInformation.userId);
		if (data?.whatsappCountryCode) {
			setCountryCodeWhatsApp(data.whatsappCountryCode);
		}
		if (data?.phoneCountryCode) {
			setCountryCodePhoneNumber(data.phoneCountryCode);
		}
		if (data?.email) {
			form.setValue("email", data.email);
		}
		if (data?.phone) {
			form.setValue("phoneNumber", data.phone);
		}
		if (data?.whatsapp) {
			form.setValue("whatsappNumber", data.whatsapp);
		}
	};
	useEffect(() => {
		getLinks();
	}, []);

	async function onSubmit(data: z.infer<typeof basicDetailsSchema>) {
		startTransition(async () => {
			const respomse = await updateBasicDetails(
				data,
				countryCodePhoneNumber,
				countryCodeWhatsApp
			);
		});
		userInformation.setCallMainLinks((prev) => !prev);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid   items-center gap-1.5 my-2"
			>
				<div className="flex md:gap-x-5 ">
					<div>
						<FormLabel className="mt-1 ">Country Code</FormLabel>
						<CountryCodeDropdown
							setCountryCode={setCountryCodePhoneNumber}
							countryCode={countryCodePhoneNumber}
						/>
					</div>
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem className="w-full md:ml-4 ml-1">
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										placeholder="xxxxxxxxxxx"
										{...field}
										className="bg-white/15"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex md:gap-5">
					<div>
						<FormLabel className="mt-1">Country Code</FormLabel>
						<CountryCodeDropdown
							setCountryCode={setCountryCodeWhatsApp}
							countryCode={countryCodeWhatsApp}
						/>
					</div>
					<FormField
						control={form.control}
						name="whatsappNumber"
						render={({ field }) => (
							<FormItem className="w-full md:ml-4 ml-1">
								<FormLabel>WhatsApp</FormLabel>
								<FormControl>
									<Input
										placeholder="xxxxxxxxxxx"
										{...field}
										className="bg-white/15"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="mb-2">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="exmaple@gmail.com"
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
}
