import * as React from "react";
import { Link } from "react-router-dom";

export default function Tasks() {

	return (
		<div className='tasks'>
			{Array(15).fill('').map((item, i) => {
				return (
					<Link
						key={i}
						to={`/task?num=${i + ''}`}
					>
						<p>Задание {i + 1}</p>
					</Link>
				);
			})}
		</div>
	);
}
