import { ThreeDots } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
const FormSubmissionSpinner = () => {
	return (
		<Button className="w-full" disabled>
			<ThreeDots
				height="35"
				width="80"
				color="#FFFFFF"
				ariaLabel="bars-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</Button>
	);
};

export default FormSubmissionSpinner;
