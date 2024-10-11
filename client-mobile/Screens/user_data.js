import { router, socket } from '../routes';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>form user data</h1>
				<button id="sendForm">SendForm</button>
    `;

	document.getElementById('sendForm').addEventListener('click', () => {
		socket.emit('userRegistered', { message: 'user Registered!' });
	});
}
