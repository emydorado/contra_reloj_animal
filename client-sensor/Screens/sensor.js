import { router, socket } from '../routes.js';

export default function renderSensor() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Sensor Functions</h1>
				<div>
        <button id="firstLine">User crossed first line</button>
        <div id="secondLine" style="display: none;">
            <button id="btnSecondLine">User crossed second line</button>
        </div>
				</div>
				<p id="timer" style="display: none;">Time: 0 seconds</p>
        <button id="winner" style="display: none;">Reveal winner</button>
    `;

	const animals = [
		{ id: 1, name: 'leon', time: 5 },
		{ id: 2, name: 'tigre', time: 3 },
		{ id: 3, name: 'mono', time: 4 },
		{ id: 4, name: 'tortuga', time: 8 },
	];

	let timer;
	let timeElapsed = 0;

	const timerElement = document.getElementById('timer');
	if (timerElement) {
		timerElement.style.display = 'block';
	}

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

	document.getElementById('firstLine').addEventListener('click', () => {
		localStorage.removeItem('playerTime');
		socket.emit('userCrossedFirstLine');
		startTimer();

		document.getElementById('firstLine').style.display = 'none';
		document.getElementById('secondLine').style.display = 'block';
	});

	document.getElementById('btnSecondLine').addEventListener('click', () => {
		socket.emit('userCrossedSecondLine');
		stopTimer();
		localStorage.setItem('playerTime', timeElapsed);

		// Mostrar el botón para revelar al ganador una vez que se ha guardado el tiempo
		document.getElementById('winner').style.display = 'block';
	});

	const playerTime = localStorage.getItem('playerTime');
	const animalId = localStorage.getItem('selectedAnimalId'); // Asegúrate de guardar esto al seleccionar el animal
	const selectedAnimal = animals.find((animal) => animal.id === Number(animalId));

	// comparar tiempos
	document.getElementById('winner').addEventListener('click', () => {
		if (selectedAnimal && playerTime !== null) {
			const playerTimeNum = Number(playerTime);
			const animalTimeNum = Number(selectedAnimal.time);
			console.log('player time:', playerTimeNum);
			console.log('animal time:', animalTimeNum);

			if (playerTimeNum < animalTimeNum) {
				socket.emit('userWins');
				console.log('User wins!');
			} else {
				socket.emit('animalWins');
				console.log('Animal wins!');
			}
		} else {
			console.log('Error: Player time or selected animal not available.');
		}
	});
}
