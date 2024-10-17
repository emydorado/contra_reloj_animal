import { router, socket } from '../routes.js';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>form user data</h1>
				<p>Insert your data so we can send your prize</p>
			    <input type="text" placeholder="Name" />
			    <input type="text" placeholder="Phone number" />
			    <input type="text" placeholder="Email" />
			    <button id="sendForm">Send form</button>
    `;

	document.getElementById('sendForm').addEventListener('click', () => {
		socket.emit('userRegistered', { message: 'user Registered!' });
		router.navigateTo('/startGame');
	});
}
