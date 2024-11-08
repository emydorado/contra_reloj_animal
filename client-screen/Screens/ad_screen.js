import { router, socket } from '../routes.js';

export default function renderAdScreen() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Ad Screen</h1>
    `;

	socket.on('userConnected', (data) => {
		console.log('User is connected:', data);
	});

	socket.on('AnimalHasBeenSelected', (animalId) => {
		localStorage.setItem('animalSelected', JSON.stringify(animalId));
		router.navigateTo('/animalData/' + animalId.id);
	});
}
