import { Link, useSearchParams } from "react-router-dom";
import Description from "../components/Description";
import Header from "../components/Header";

export default function TaskPage() {

	const [params, setParams] = useSearchParams();
	
	return (
		<>
			<Description
				num={params.get("num")}
				leftPage={params.get("left")}
				rightPage={params.get("right")}
				url={params.get("solutionUrl")}
				video={params.get("videoUrl")}
			></Description>
		</>
	);
}
