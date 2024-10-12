import { router, socket } from '../routes.js';

export default function userWins() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>user wins</h1>
				<button id="winner">i win</button>
    `;

	document.getElementById('winner').addEventListener('click', () => {
		socket.emit('userWins', { message: 'user wins!' });
	});

	socket.on('userCrossedSecondLine', (data) => {
		console.log('User crossed the second line:', data);
	});
}
