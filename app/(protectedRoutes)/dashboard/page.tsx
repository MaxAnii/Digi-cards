"use client";
import UserData from "@/components/UserData";

const Page = () => {
	return (
		<div className="pl-2 md:pl-9 md:pt-[100px] pt-[150px]">
			<div className="w-full max-w-[90vw] md:flex ">
				<div>
					<div className="pb-2 md:text-3xl text-xl">User List</div>
					<p className="md:text-xl text-sm">
						Here you can see and remove users form your system{" "}
					</p>
				</div>
				<div className="ml-auto sm:mt-3 md:mt-0"></div>
			</div>
			<UserData></UserData>
		</div>
	);
};

export default Page;
