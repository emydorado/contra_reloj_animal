import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>select animal</h1>
				<button id="animal1">Leon</button>
				<button id="animal2">Tigre</button>
				<button id="animal3">Mono</button>
				<button id="animal4">Tortuga</button>
				<button id="selectAnimal">Select animal</button>
    `;

	document.getElementById('selectAnimal').addEventListener('click', () => {
		console.log('emited');
		router.navigateTo('/confirmSelection');
	});

	document.getElementById('animal1').addEventListener('click', () => {
		console.log('emited');
		socket.emit('selectedAnimal', { message: 'animal hasbeen selected' });
	});
}
