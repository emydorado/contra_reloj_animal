import { router, socket } from '../routes.js';

export default function renderTimer() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Timer</h1>
				<button id="timer">Start timer</button>
    `;

	document.getElementById('timer').addEventListener('click', () => {
		socket.emit('userTime', { message: 'user time!' });
	});

	socket.on('userCrossedFirstLine', (data) => {
		console.log('User crossed the first line:', data);
	});
}
