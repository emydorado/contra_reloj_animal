import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>select an animal</h1>
    `;

	socket.on('userConnected', (data) => {
		console.log('new User Connected:', data);
	});

	socket.on('selectedAnimal', () => {
		router.navigateTo('/instructions');
	});
}
