import { router, socket } from '../routes';

export default function renderAnimalData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Animal Data</h1>
    `;

	socket.on('selectedAnimal', (data) => {
		console.log('User selected:', data);
	});
}
