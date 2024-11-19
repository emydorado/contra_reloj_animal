import { router, socket } from '../routes.js';

export default function renderLoser() {
	const app = document.getElementById('app');
	app.innerHTML = `
          <h1>Animal Wins!</h1>
				<p id="result">Animal wins!</p>
				<p id="times">Waiting for times...</p>
				<button id="prize">Claim prize</button>
    `;

	const userTime = localStorage.getItem('userTime');
	const animalTime = localStorage.getItem('animalTime');

	if (userTime && animalTime) {
		document.getElementById('times').innerText = `User Time: ${userTime} seconds, Animal Time: ${animalTime} seconds`;
	} else {
		document.getElementById('times').innerText = 'Times not available.';
	}

	document.getElementById('prize').addEventListener('click', () => {
		socket.emit('sendLoserPrize');
		router.navigateTo('/end');
	});
}
