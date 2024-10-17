import { router, socket } from '../routes.js';

export default function renderInstructions() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Instructions</h1>
				<p>Here we explain how to play the game</p>
    `;

	socket.on('userHasRegistered', (data) => {
		router.navigateTo('/startGame');
	});
}
