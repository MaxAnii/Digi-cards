import FormContainer from "@/components/auth/FormContainer";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
	return (
		<div className="flex justify-center items-center h-[80vh]">
			<FormContainer
				title="Create an account"
				backButtonLabel="Already have an account?"
				backButtonhref="/signin"
			>
				<SignupForm></SignupForm>
			</FormContainer>
		</div>
	);
};

export default Signup;
