"use client";
import FormContainer from "@/components/auth/FormContainer";
import LoginForm from "@/components/auth/LoginForm";

const SignIn = () => {
	return (
		<>
			<div className="flex justify-center">
				<FormContainer
					title="Welcome back"
					backButtonLabel="Don't have an account?"
					backButtonhref="/username"
				>
					<LoginForm></LoginForm>
				</FormContainer>
			</div>
		</>
	);
};

export default SignIn;
