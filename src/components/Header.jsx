import { Link } from "react-router-dom";
import * as THREE from "three";

export default function Header() {
	const GRAVITY = 0.0007;
	const BOUNCE = -0.7;

	let raf, scene, camera, renderer, controls;
	let container, plane;

	const addBall = () => {
		const geo = new THREE.SphereGeometry(Math.random() * 1.5, 10, 10);
		const mat = new THREE.MeshBasicMaterial({
			color: 0x000,
			wireframe: true,
		});
		const msh = new THREE.Mesh(geo, mat);

		msh.position.y = camera.top;
		msh.position.x =
			Math.random() * (camera.right - camera.left) -
			(camera.right - camera.left) / 2;

		msh.userData.vx = Math.random() * 1.2 - 0.6;
		msh.userData.vy = Math.random() * 1.2 - 0.6;

		container.add(msh);
	};

	setInterval(() => {
		for (let i = 0; i < container.children.length; i++) {
			const ball = container.children[i];
			ball.userData.vx = Math.random() / 4;
			ball.userData.vy = Math.random() / 4;
		}
	}, 2000);
	const onLoad = () => {
		scene = new THREE.Scene();

		camera = new THREE.OrthographicCamera(
			window.innerWidth / -100,
			window.innerWidth / 100,
			window.innerHeight / 100,
			window.innerHeight / -100,
			-10,
			1000,
		);
		const root = document.querySelector(".header");
		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		root.appendChild(renderer.domElement);

		const geo = new THREE.PlaneGeometry(
			camera.right - camera.left,
			camera.bottom - camera.top,
		);
		const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		plane = new THREE.Mesh(geo, mat);
		geo.computeBoundingBox();

		container = new THREE.Group();
		scene.add(container);

		for (let i = 0; i < 10; i++) addBall();

		onEnterFrame();
	};

	const onEnterFrame = () => {
		for (let i = 0; i < container.children.length; i++) {
			const ball = container.children[i];
			const radius = ball.geometry.parameters.radius;
			const b = plane.geometry.boundingBox;

			ball.rotation.z += ball.userData.vx < 0 ? 0.01 : -0.01;
			ball.userData.vy += GRAVITY;

			ball.position.y -= ball.userData.vy;
			ball.position.x += ball.userData.vx;

			if (ball.position.x + radius >= b.max.x) {
				ball.position.x = b.max.x - radius;
				ball.userData.vx *= BOUNCE;
			}
			if (ball.position.x - radius <= b.min.x) {
				ball.position.x = b.min.x + radius;
				ball.userData.vx *= BOUNCE;
			}

			if (ball.position.y + radius >= b.max.y) {
				ball.position.y = b.max.y - radius;
				ball.userData.vy *= BOUNCE;
			}

			if (ball.position.y - radius <= b.min.y) {
				ball.position.y = b.min.y + radius;
				ball.userData.vy *= BOUNCE;
			}
		}

		renderer.render(scene, camera);
		raf = window.requestAnimationFrame(onEnterFrame);
	};

	window.addEventListener("resize", () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	window.addEventListener("load", onLoad);

	return (
		<div className='header'>
			<div className='header__container'>
				<Link to='/'>
					<div className='header__text'>Примитив ограниченной дереализации</div>
				</Link>
				<img
					className='header__logo'
					alt="AR"
					src='https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/ar.jpg?v=1671026335428'
				></img>
			</div>
		</div>
	);
}
