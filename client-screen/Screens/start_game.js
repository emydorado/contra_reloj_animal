import { router, socket } from '../routes';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>start game</h1>
    `;

	socket.on('userRegistered', (data) => {
		console.log('User Registered ready to start:', data);
	});
}
