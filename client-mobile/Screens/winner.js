import { router } from '../routes.js';

export default function renderWinner() {
	const app = document.getElementById('app');
	app.innerHTML = `
           <h1>You win!</h1>
				<p id="times">Waiting for times...</p>
    `;

	const userTime = localStorage.getItem('userTime');
	const animalTime = localStorage.getItem('animalTime');

	const selectedanimal = JSON.parse(localStorage.getItem('animalSelected')); // Deserializar JSON
	const animalId = selectedanimal.id;

	if (userTime && animalTime) {
		document.getElementById('times').innerText = `User Time: ${userTime} seconds, Animal Time: ${animalTime} seconds`;
	} else {
		document.getElementById('times').innerText = 'Times not available.';
	}
}
