import { router, socket } from '../routes.js';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>form user data</h1>
				<form>
			    <input type="text" placeholder="Name" />
			    <input type="text" placeholder="Phone number" />
			    <input type="text" placeholder="Email" />
			    <button type="submit" id="sendForm">Send form</button>
			</form>
    `;

	document.getElementById('sendForm').addEventListener('click', () => {
		socket.emit('userRegistered', { message: 'user Registered!' });
	});
}
