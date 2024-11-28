import { router, socket } from '../routes.js';

export default function renderEnd() {
	const app = document.getElementById('app');
	app.innerHTML = `
					<img id="topEnd" src="./resources/topImgEnd.png" alt="Imagen top">
					<img id="titleGracias" src="./resources/gracias.png" alt="Imagen gracias">
           <h1 id="titulo">Te esperamos</h1>
				<img id="logoZoo" src="./resources/logo-zoo.png" alt="logo">
					 <img id="bottomEnd" src="./resources/bottomImgEnd.png" alt="Imagen footer">

    `;
}
