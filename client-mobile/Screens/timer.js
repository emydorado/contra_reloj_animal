import { router, socket } from '../routes.js';

export default function renderTimer() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Timer</h1>
				<p id="timer" style="display: none;">Time: 0 seconds</p>

    `;

	const animals = [
		{ id: 1, name: 'leon', information: 'This is LEON data', time: 5 },
		{ id: 2, name: 'tigre', information: 'This is TIGRE data', time: 3 },
		{ id: 3, name: 'mono', information: 'This is MONO data', time: 4 },
		{ id: 4, name: 'tortuga', information: 'This is TORTUGA data', time: 8 },
	];

	let timer;
	let timeElapsed = 0;

	const timerElement = document.getElementById('timer');
	if (timerElement) {
		timerElement.style.display = 'block';
		startTimer();
	}

	socket.on('userCrossedSecondLine', (data) => {
		stopTimer();
		sendTimeToServer(timeElapsed);
		localStorage.setItem('playerTime', timeElapsed);
	});

	function startTimer() {
		clearInterval(timer);

		timer = setInterval(() => {
			timeElapsed++;

			if (timerElement) {
				timerElement.innerText = `Time: ${timeElapsed} seconds`;
			}
		}, 1000);
	}

	function stopTimer() {
		clearInterval(timer);
		console.log('Timer stopped.');
	}

	function sendTimeToServer(timeElapsed) {
		const animalId = localStorage.getItem('selectedAnimalId');
		fetch('/winner', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ time: timeElapsed, animalId }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Response from server:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	socket.on('animalWins', (data) => {
		router.navigateTo('/loser');
	});

	socket.on('userWins', (data) => {
		router.navigateTo('/winner');
	});
}
