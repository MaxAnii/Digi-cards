import React from "react";
import Link from "next/link";
const LandingPage = () => {
	return (
		<div className="min-h-screen  flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-8">
				Welcome to Digital Business Card
			</h1>
			<div className="flex flex-col space-y-4">
				<Link
					href="/signin"
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-center w-full max-w-sm"
				>
					Sign In
				</Link>
				<Link
					href="/signup"
					className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-center w-full max-w-sm"
				>
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
