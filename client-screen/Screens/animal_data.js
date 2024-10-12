import { router, socket } from '../routes.js';

export default function renderAnimalData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Animal Data</h1>
				<p>this is leon data</p>
    `;

	socket.on('confirmAnimal', (data) => {
		router.navigateTo('/instructions');
	});
}
