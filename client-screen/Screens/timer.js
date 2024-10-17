import { router, socket } from '../routes.js';

export default function renderTimer(word) {
	console.log(word);
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>timer</h1>
				<p id="timer" style="display: none;">Time: 0 seconds</p>

    `;

	const animals = [
		{ id: 1, name: 'leon', information: 'This is LEON data', time: '5' },
		{ id: 2, name: 'tigre', information: 'This is TIGRE data', time: '3' },
		{ id: 3, name: 'mono', information: 'This is MONO data', time: '4' },
		{ id: 4, name: 'tortuga', information: 'This is TORTUGA data', time: '8' },
	];

	let timer;
	let timeElapsed = 0;

	const animalId = parseInt(word, 10);
	const currentAnimal = animals.find((animal) => animal.id === animalId);
	console.log('this is current animal:', currentAnimal);

	document.getElementById('timer').style.display = 'block';
	startTimer();

	socket.on('userCrossedSecondLine', (data) => {
		stopTimer();
	});

	function startTimer() {
		clearInterval(timer);

		timer = setInterval(() => {
			timeElapsed++;
			document.getElementById('timer').innerText = `Time: ${timeElapsed} seconds`;
		}, 1000);
	}

	function stopTimer() {
		clearInterval(timer);
		console.log('Timer stopped.');
	}
}
