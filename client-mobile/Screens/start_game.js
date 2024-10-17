import { router, socket } from '../routes.js';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Start game</h1>
		<button id="StartGame">Start game</button>
		<div id="gameStatus" style="display: none;">
			<button id="gameStarted">Game started</button>
			<p>Time will start when you cross the line</p>
		</div>
    `;

	document.getElementById('StartGame').addEventListener('click', () => {
		socket.emit('startGame', { message: 'game started!' });

		document.getElementById('StartGame').style.display = 'none';
		document.getElementById('gameStatus').style.display = 'block';
	});

	socket.on('userCrossedFirstLine', (data) => {
		router.navigateTo('/timer');
	});
}
