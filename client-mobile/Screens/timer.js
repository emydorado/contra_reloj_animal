import { router, socket } from '../routes.js';

export default function renderTimer() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Timer</h1>
				<p id="timer" style="display: none;">Time: 0 seconds</p>

    `;

	let timer;
	let timeElapsed = 0;

	document.getElementById('timer').style.display = 'block';
	startTimer();

	socket.on('userCrossedSecondLine', (data) => {
		stopTimer();
		sendTimeToServer(timeElapsed);
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

	socket.on('userWins', (data) => {
		router.navigateTo('/winner');
	});
}
