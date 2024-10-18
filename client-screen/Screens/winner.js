import { router } from '../routes.js';

export default function renderWinner() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Race Results</h1>
				<p id="result">Player wins!</p>
				<p id="times">Waiting for times...</p>
    `;

	const animals = [
		{ id: 1, name: 'leon', information: 'This is LEON data', time: '5' },
		{ id: 2, name: 'tigre', information: 'This is TIGRE data', time: '3' },
		{ id: 3, name: 'mono', information: 'This is MONO data', time: '4' },
		{ id: 4, name: 'tortuga', information: 'This is TORTUGA data', time: '8' },
	];

	const playerTime = localStorage.getItem('playerTime');
	const animalId = localStorage.getItem('selectedAnimalId');

	const selectedAnimal = animals.find((animal) => animal.id === Number(animalId));

	console.log(playerTime);
	console.log(selectedAnimal);

	if (selectedAnimal) {
		document.getElementById('times').innerText = `Player Time: ${playerTime}, Animal Time: ${selectedAnimal.time}`;
	} else {
		document.getElementById('times').innerText = `Player Time: ${playerTime}, Animal Time: not found`;
	}
}
