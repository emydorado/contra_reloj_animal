import { router, socket } from '../routes.js';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
		  	<div id="topImages">
				<img id="hojasTopIzq" src="./resources/hojasIniciarJuego.png" alt="Imagen top">
		  	<img id="tucanHojas" src="./resources/tucanHojas.png" alt="tucan">
				</div>

		  	<img id="titleColibri" src="./resources/titleColibrí.png" alt="title">

				<div id ="info">
        <p><b>¿Estás listo?</b></p>
				<h1>Presiona <b> ¨iniciar juego¨ </b> en</h1>
				<h1>tu dispostivo</h1>
				<p><b>El tiempo iniciará cuando cruces la línea</b></p>
				<p id="timer" style="display: none;">Time: 0 seconds</p>
				</div>

				<img id="leon" src="./resources/bottomIniciarJuego.png" alt="leon">

    `;

	socket.on('userCrossedFirstLine', (data) => {
		router.navigateTo('/timer');
	});
}
