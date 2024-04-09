"use client";
import FormContainer from "@/components/auth/FormContainer";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = () => {
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<FormContainer
					title="Reset Password"
					backButtonLabel="Back to login"
					backButtonhref="/signin"
				>
					<ResetPasswordForm></ResetPasswordForm>
				</FormContainer>
			</div>
		</>
	);
};

export default ResetPassword;
