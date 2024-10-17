import { router, socket } from '../routes.js';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Start game</h1>
				<p>Press Start Game in your phone</p>
				<p>The time will start when you cross the line</p>
				<p id="timer" style="display: none;">Time: 0 seconds</p>
    `;

	socket.on('userCrossedFirstLine', (animalId) => {
		console.log(animalId);
		router.navigateTo('/timer');
	});
}
