import * as React from "react";
import { Link } from "react-router-dom";

export default function Tasks() {
	
	const titles = [" lorem lorem lorem lorem lorem", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	return (
		<div className='tasks'>
			<div class='tasks__paragraph'>AR.js</div>
			<div className='tasks__container'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
						</Link>
					);
				})}
			</div>
			<div class='tasks__paragraph'>Three.js, Universal SDK</div>
			<div class='tasks__container'>
				{[5, 6, 7, 8, 9].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
						</Link>
					);
				})}
			</div>
			<div class='tasks__paragraph'>Игры</div>
			<div class='tasks__container'>
				{[10, 11, 12, 13, 14].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
