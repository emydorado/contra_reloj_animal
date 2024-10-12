import { router, socket } from '../routes.js';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Start game</h1>
				<button id="StartGame">Start game</button>
    `;

	document.getElementById('StartGame').addEventListener('click', () => {
		socket.emit('startGame', { message: 'game started!' });
	});
}
