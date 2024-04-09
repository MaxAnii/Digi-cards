import { Skeleton } from "./ui/skeleton";

const NameDescriptionSkeletonLoader = () => {
	return (
		<div className="space-y-2">
			<Skeleton className="h-6 w-[250px] mt-[-40px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	);
};

export default NameDescriptionSkeletonLoader;
