import { router, socket } from '../routes';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>select animal</h1>
				<button id="selectAnimal">Select animal</button>
    `;

	document.getElementById('selectAnimal').addEventListener('click', () => {
		socket.emit('selectedAnimal', { message: 'animal selected!' });
	});
}
