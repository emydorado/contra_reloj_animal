import { router, socket } from '../routes';

export default function renderConfirmSelection() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Confirm selecton</h1>
				<button id="confirmationBtn">Send Confirmation</button>

    `;

	document.getElementById('confirmationBtn').addEventListener('click', () => {
		socket.emit('confirmation', { message: 'Button clicked!' });
	});
}
