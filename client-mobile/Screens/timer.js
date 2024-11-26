import { router, socket } from '../routes.js';

export default function renderTimer() {
	const app = document.getElementById('app');
	app.innerHTML = `
	<div id="app">
		<img id="topImagen" src="./resources/topImage.png" alt="Imagen header">
		<h1 id="titulo">Timer</h1>
		<p id="timer" style="display: none;">Time: 0 seconds</p>
		<img id="bottomImage" src="./resources/bottomImage.png" alt="Imagen footer">
		</div>`;

	const timerElement = document.getElementById('timer');

	socket.on('timerUpdate', (timeElapsed) => {
		console.log('Timer update received:', timeElapsed); // Debería mostrar actualizaciones
		const timerElement = document.getElementById('timer');
		if (timerElement) {
			timerElement.style.display = 'block';
			timerElement.innerText = `Time: ${timeElapsed} seconds`;
		}
	});

	socket.on('animalWins', (data) => {
		router.navigateTo('/loser');
	});

	socket.on('userWins', (data) => {
		router.navigateTo('/winner');
	});
}
