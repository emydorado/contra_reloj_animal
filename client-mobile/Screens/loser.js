import { router, socket } from '../routes.js';

export default function renderLoser() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>loser</h1>
				<button id="userLose">User lose</button>

    `;

	document.getElementById('userLose').addEventListener('click', () => {
		socket.emit('animalWins', { message: 'user lost!' });
	});

	socket.on('userCrossedSecondLine', (data) => {
		console.log('User crossed the second line:', data);
	});
}
