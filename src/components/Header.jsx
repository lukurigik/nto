import { Link } from "react-router-dom";
import useThree from "../hooks/useThree";
import icon from "../img/ar.png";

export default function Header() {

	useThree()
	
	return (
		<div className='header'>
			<div className='header__container'>
				<Link to='/'>
					<div className='header__text'>Примитив ограниченной дереализации</div>
				</Link>
				<img className='header__logo' alt='AR' src={icon}></img>
			</div>
		</div>
	);
}
