"use client";
import FormContainer from "@/components/auth/FormContainer";
import SignupForm from "@/components/auth/SignupForm";
import UserNameForm from "@/components/auth/UserNameForm";
const UserName = () => {
	return (
		<div>
			<div className="mt-[100px] md:px-20 px-5">
				<h3 className="md:text-2xl text-xl font-bold ">
					Secure your exclusive link now!
				</h3>
				<p className="md:text-lg  italic  ">The prime ones are up for grabs!</p>
			</div>
			<div className="flex justify-center mt-3">
				<FormContainer
					title="Create an account"
					backButtonLabel="Already have an account?"
					backButtonhref="/signin"
				>
					<UserNameForm></UserNameForm>
				</FormContainer>
			</div>
		</div>
	);
};

export default UserName;
