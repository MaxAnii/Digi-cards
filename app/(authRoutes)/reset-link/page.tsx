"use client";
import FormContainer from "@/components/auth/FormContainer";
import ResetLinkForm from "@/components/auth/RestLinkForm";

const ResetLink = () => {
	return (
		<>
			<div className="flex justify-center items-center h-[80vh]">
				<FormContainer
					title="Forgot password"
					backButtonLabel="Back to login"
					backButtonhref="/signin"
				>
					<ResetLinkForm></ResetLinkForm>
				</FormContainer>
			</div>
		</>
	);
};

export default ResetLink;
