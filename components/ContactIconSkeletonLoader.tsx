import { Skeleton } from "./ui/skeleton";

const ContactIconSkeletonLoader = () => {
	return (
		<>
			<Skeleton className="md:h-[120px] md:w-[120px] h-[100px] w-[120px]"></Skeleton>
			<Skeleton className="md:h-[120px] md:w-[120px] h-[100px] w-[120px]"></Skeleton>
			<Skeleton className="md:h-[120px] md:w-[120px] h-[100px] w-[120px]"></Skeleton>
			<Skeleton className="md:h-[120px] md:w-[120px] h-[100px] w-[120px]"></Skeleton>
		</>
	);
};

export default ContactIconSkeletonLoader;
