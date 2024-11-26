import { router, socket } from '../routes.js';

export default function renderWinner() {
	const app = document.getElementById('app');
	app.innerHTML = `
					<img id="topWinner" src="./resources/topWinner.png" alt="Imagen top">

				<div id="timeContent">
        <h1 id="ganador">¡Ha ganado el animal!</h1>

        <div id="result-container">

				<p><b>El tiempo del animal fue de</b></p>
            <p class="result" id="animal-time"><span>Waiting...</span></p>

				<p id="textTime"><b>Tu tiempo fue de</b></p>
            <p class="result" id="user-time"><span>Waiting...</span></p>
        </div>
				</div>

				<img id="pajaroTucan" src="./resources/pajaro-tucan.png" alt="Imagen middle">

				<div class="reclamarPremio">
				<h2 id="reclamarPremio">Presiona <b>¨Reclamar premio¨</b></h2>
				<h2>en tu dispositivo</h2>
				</div>

				<div class="bottom">
				<h3>¡Te esperamos!</h3>

				<img id="logoZoo" src="./resources/logo-zoo.png" alt="logo">
				</div>
    `;

	const userTime = localStorage.getItem('userTime');
	const animalTime = localStorage.getItem('animalTime');

	const selectedanimal = JSON.parse(localStorage.getItem('animalSelected')); // Deserializar JSON
	const animalId = selectedanimal.id;

	if (userTime && animalTime) {
		document.getElementById('animal-time').querySelector('span').innerText = `${animalTime} segundos`;
		document.getElementById('user-time').querySelector('span').innerText = `¡${userTime} segundos!`;
	} else {
		document.getElementById('animal-time').querySelector('span').innerText = 'No disponible.';
		document.getElementById('user-time').querySelector('span').innerText = 'No disponible.';
	}

	socket.on('sendedPrize', (data) => {
		console.log('hola');

		router.navigateTo('/');
	});
}
