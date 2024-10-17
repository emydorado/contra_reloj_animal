import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Select animal</h1>
				<div id=buttons>
				<button data-id="1" id="animal1">Leon</button>
				<button data-id="2" id="animal2">Tigre</button>
				<button data-id="3" id="animal3">Mono</button>
				<button data-id="4" id="animal4">Tortuga</button>
				</div>
				<button id="selectAnimal">Select animal</button>
    `;

	const animals = [
		{ id: 1, name: 'leon', information: 'This is LEON data', time: '5' },
		{ id: 2, name: 'tigre', information: 'This is TIGRE data', time: '3' },
		{ id: 3, name: 'mono', information: 'This is MONO data', time: '4' },
		{ id: 4, name: 'tortuga', information: 'This is TORTUGA data', time: '8' },
	];

	const buttons = document.getElementById('buttons');

	buttons.addEventListener('click', (event) => {
		if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
			const animalId = event.target.getAttribute('data-id');
			console.log('emitted', animalId);
			socket.emit('selectedAnimal', animalId);
		}
	});

	document.getElementById('selectAnimal').addEventListener('click', () => {
		router.navigateTo('/confirmSelection');
	});
}
