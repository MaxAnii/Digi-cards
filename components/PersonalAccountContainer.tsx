import UpdateCredentialEmail from "./UpdateCredentialEmail";
import UpdateUserPassword from "./UpdatePassword";

const PersonalAccountContainer = () => {
	return (
		<div className=" text-left font-normal">
			<UpdateCredentialEmail></UpdateCredentialEmail>
			<UpdateUserPassword></UpdateUserPassword>
		</div>
	);
};

export default PersonalAccountContainer;
