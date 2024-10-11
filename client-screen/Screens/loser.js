import { router, socket } from '../routes';

export default function renderScreen1() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>user lost</h1>
    `;

	socket.on('animalWins', (data) => {
		console.log('User lost:', data);
	});
}
