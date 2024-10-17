import { router, socket } from '../routes.js';

export default function renderResultsScreen() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Race Results</h1>
				<p id="result">Waiting for the result...</p>
    `;

	socket.on('userWins', (data) => {
		console.log('Player won:', data);
		document.getElementById(
			'result'
		).innerText = `Player wins! Player Time: ${data.playerTime}, Animal Time: ${data.animalTime}`;
	});

	socket.on('animalWins', (data) => {
		console.log('Animal won:', data);
		document.getElementById(
			'result'
		).innerText = `Animal wins! Player Time: ${data.playerTime}, Animal Time: ${data.animalTime}`;
	});
}
