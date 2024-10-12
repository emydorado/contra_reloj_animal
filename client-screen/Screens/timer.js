import { router, socket } from '../routes.js';

export default function renderTimer() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>timer</h1>
    `;

	socket.on('userCrossedFirstLine', (data) => {
		console.log('User crossed the first line:', data);
	});
}
