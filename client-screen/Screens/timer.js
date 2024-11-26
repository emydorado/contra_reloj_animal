import { router, socket } from '../routes.js';

export default function renderTimer() {
	console.log();
	const app = document.getElementById('app');
	app.innerHTML = `
		  	<img id="timerTop" src="./resources/timerTop.png" alt="Imagen top">

				<div id="contentTimer">
        <h1>¡Buena suerte!</h1>
				<p id="timer" style="display: none;">Time: 0 seconds</p>
				</div>

				<img id="timerBottom" src="./resources/timerBottom.png" alt="Imagen bottom">
    `;

	const timerElement = document.getElementById('timer');

	socket.on('timerUpdate', (timeElapsed) => {
		console.log('Timer update received:', timeElapsed); // Debería mostrar actualizaciones
		const timerElement = document.getElementById('timer');
		if (timerElement) {
			timerElement.style.display = 'block';
			timerElement.innerText = `${timeElapsed} seconds`;
		}
	});

	socket.on('animalWins', ({ userTime, animalTime }) => {
		localStorage.setItem('userTime', userTime);
		localStorage.setItem('animalTime', animalTime);

		console.log(`User wins! User Time: ${userTime}, Animal Time: ${animalTime}`);
		router.navigateTo('/loser');
	});

	socket.on('userWins', ({ userTime, animalTime }) => {
		localStorage.setItem('userTime', userTime);
		localStorage.setItem('animalTime', animalTime);

		console.log(`Animal wins! User Time: ${userTime}, Animal Time: ${animalTime}`);
		router.navigateTo('/winner');
	});
}
