import StepCard from "./StepCard";

import BlinkingIcons from "./BlinkingIcons";
const DescriptionSection = () => {
	return (
		<>
			<h1 className="text-2xl font-semibold lg:text-4xl text-wrap text-center mt-3">
				How this works !!
			</h1>
			<div className="flex justify-center items-center   ">
				<BlinkingIcons></BlinkingIcons>

				<StepCard></StepCard>
			</div>
		</>
	);
};

export default DescriptionSection;
