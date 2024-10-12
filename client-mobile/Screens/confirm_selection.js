import { router, socket } from '../routes.js';

export default function renderConfirmSelection() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Confirm selection</h1>
				<p>Are you sure you want this animal? Read their description!</p>
				<button id="confirmationBtn">Send Confirmation</button>

    `;

	document.getElementById('confirmationBtn').addEventListener('click', () => {
		socket.emit('confirmation', { message: 'Button clicked!' });
		router.navigateTo('/userData');
	});
}
