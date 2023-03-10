import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import cross from "../img/cross.png"

export default function Carousel() {
	const [active, setActive] = useState(false);
	const hotelCards = [
		{
			imageSrc:
				"https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
			title: "Studio Room",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			title: "Deluxe Room",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
			title: "King Deluxe Room",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			title: "Royal Suite",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
	];
	const settings = {
		dots: true,
		play: true,
		infinite: true,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='slider'>
			<div className='slider__qr'>
        <div className={active ? "slider__background" : ""}></div>
				<div
					className={active ? "slider__in" : "slider__to"}
					onClick={() => setActive(!active)}
				></div>
        <img
					className={active ? "slider__back" : "slider__none"}
					onClick={() => setActive(!active)}
          src={cross}
          alt="<"
				></img>
				<div
					className={active ? "slider__code slider__active" : "slider__code"}
				></div>
			</div>
			<Slider {...settings}>
				{hotelCards.map((card, index) => (
					<div className='slider__container' key={index}>
						<p className='slider__title'>{card.title}</p>
						<img
							className='slider__img'
							alt={card.title}
							src={card.imageSrc}
							width='100'
							height='100'
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}
