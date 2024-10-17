import { router, socket } from '../routes.js';

export default function renderConfirmSelection() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Confirm selection</h1>
				<p>Are you sure you want this animal? Read their description!</p>
				<button id="confirmationBtn">Send Confirmation</button>
				<p>Do you want to change the animal you choose?</p>
				<button id="changeAnimal">Change animal</button>
    `;

	document.getElementById('confirmationBtn').addEventListener('click', () => {
		socket.emit('confirmation', { message: 'Button clicked!' });
		router.navigateTo('/userData');
	});
	document.getElementById('changeAnimal').addEventListener('click', () => {
		router.navigateTo('/');
	});
}
