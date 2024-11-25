import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
				<div id="app">
  			<img id="topImage" src="./resources/contraReloj.png" alt="Imagen header">
 				<p id="instructions">¡Elige tu oponente animal! ¿Quieres correr contra una tortuga lenta pero constante, o prefieres perder dignamente contra un canguro que ni siquiera te verá? ¡Tú decides!</p>
  			<div id="buttons">

				<button data-id="aba237a6-3fa0-4ccc-8c3c-fa989f63c78b">
				<img id="leonImage" src="./resources/leon.png" alt="Imagen leon">
				León</button>

				<button data-id="f892ab3a-d1df-4d5e-9d7c-50e9212a5576">
				<img id="canguroImage" src="./resources/canguro.png" alt="Imagen canguro">
				Canguro</button>

				<button data-id="93a97590-1ca6-421e-af7b-1a8f6fa0ccd4">
				<img id="micoImage" src="./resources/mico.png" alt="Imagen mico">
				Mono</button>

				<button data-id="f50d4b1e-0041-4006-a250-aac6e477f2de">
				<img id="tortugaImage" src="./resources/tortuga.png" alt="Imagen tortuga">
				Tortuga</button>

				<button data-id="59f1c70a-808c-4fb4-9fdd-cb307c1b780d">
				<img id="patoImage" src="./resources/pato.png" alt="Imagen pato">
				Pato</button>

				<button data-id="789c2d3b-650e-4199-a8c0-dc9aa797663c">
				<img id="flamencoImage" src="./resources/flamenco.png" alt="Imagen flamenco">
				Flamenco</button>

				<button data-id="9863bae1-dcee-41c0-a3b9-982b97efbe07">
				<img id="antilopeImage" src="./resources/antilope.png" alt="Imagen antilope">
				Antílope</button>

				<button data-id="b7a28f2f-a699-4d8c-b4c2-01e1ac008296">
				<img id="colibriImage" src="./resources/colibri.png" alt="Imagen colibri">
				Colibrí</button>

				<button data-id="ee7417f6-6dff-4f15-ba9a-82e8d3ef3ae6">
				<img id="tucanImage" src="./resources/tucan.png" alt="Imagen tucan">
				Tucán</button>

				</div>
				<button id="selectAnimal">JUGAR</button>
			<img id="bottomImage" src="./resources/zoologicoDeCali.png" alt="Imegen footer">
				</div>
    `;

	const buttons = document.getElementById('buttons');

	buttons.addEventListener('click', (event) => {
		if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
			const animalId = event.target.getAttribute('data-id');
			socket.emit('selectedAnimal', animalId);
		}
	});

	socket.emit('userConnected');

	document.getElementById('selectAnimal').addEventListener('click', () => {
		router.navigateTo('/confirmSelection');
	});
}
