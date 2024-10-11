import { router, socket } from '../routes';

export default function renderWinner() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>user wins</h1>
    `;

	socket.on('userCrossedSecondLine', (data) => {
		console.log('User crossed the second line:', data);
	});
}
