import {useRef } from "react";
import { Link } from "react-router-dom";
import arrow from '../img/rightBlack.png'

export default function Description(
  { num } = {
    num: 1,
  }
) {

  const tasksInfo = [
		{
			num: 1,
			leftPage: 15,
			rightPage: 2,
			url: "",
			video: "",
		},
		{
			num: 2,
			leftPage: 1,
			rightPage: 3,
			url: "",
			video: "",
		},
		{
			num: 3,
			leftPage: 2,
			rightPage: 4,
			url: "",
			video: "",
		},
		{
			num: 4,
			leftPage: 3,
			rightPage: 5,
			url: "",
			video: "",
		},
		{
			num: 5,
			leftPage: 4,
			rightPage: 6,
			url: "",
			video: "",
		},
		{
			num: 6,
			leftPage: 5,
			rightPage: 7,
			url: "",
			video: "",
		},
		{
			num: 7,
			leftPage: 6,
			rightPage: 8,
			url: "",
			video: "",
		},
		{
			num: 8,
			leftPage: 7,
			rightPage: 9,
			url: "",
			video: "",
		},
		{
			num: 9,
			leftPage: 8,
			rightPage: 10,
			url: "",
			video: "",
		},
		{
			num: 10,
			leftPage: 9,
			rightPage: 11,
			url: "",
			video: "",
		},
		{
			num: 11,
			leftPage: 10,
			rightPage: 12,
			url: "",
			video: "",
		},
		{
			num: 12,
			leftPage: 11,
			rightPage: 13,
			url: "",
			video: "",
		},
		{
			num: 13,
			leftPage: 12,
			rightPage: 14,
			url: "",
			video: "",
		},
		{
			num: 14,
			leftPage: 13,
			rightPage: 15,
			url: "",
			video: "",
		},
		{
			num: 15,
			leftPage: 14,
			rightPage: 1,
			url: "",
			video: "",
		},
	];
  const imgDesk = useRef();
  const checkWidth = () => {
    if (imgDesk.current.style.width == "60%") {
      imgDesk.current.style.width = "20%";
      imgDesk.current.style.borderRadius = "";
    } else {
      imgDesk.current.style.width = "60%";
      imgDesk.current.style.borderRadius = "10px";
    }
  }

  return (
    <div className="description">
      <div className="description__num">
        <Link to={`/task?num=${+num - 1 === -1 ? 14 : +num - 1}`}>
          <img
            className="description__str1"
            src={arrow}
            alt='>'
          ></img>
        </Link>
        Задание {+num + 1}
        <Link to={`/task?num=${+num + 1 === 15 ? 0 : +num + 1}`}>
          <img
            className="description__str2"
            src={arrow}
            alt=''
          ></img>
        </Link>
      </div>
      <div className="description__show">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAA1BMVEVrbnfW57utAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC"
          className="description__img"
          ref={imgDesk}
          onClick={() => checkWidth()}
          alt=''
        ></img>
        <div className="description__video">
          <video controls loop autoplay>
            <source src={tasksInfo[num].video}></source>
          </video>
        </div>
      </div>
      <div className="description__links">
        <Link className="description__html" to={`/html?num=${num}`}>
          <div>Код решения</div>
        </Link>
        <a target="_blank" href={tasksInfo[num].url}>
          Демонстрация
        </a>
      </div>
    </div>
  );
}
