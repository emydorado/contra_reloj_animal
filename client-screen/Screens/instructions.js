import { router, socket } from '../routes.js';

export default function renderInstructions() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Instructions</h1>
    `;

	socket.on('confirmation', (data) => {
		console.log('User confirmed:', data);
	});
}
