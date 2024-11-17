import { router, socket } from '../routes.js';

export default function renderAnimalData(id) {
	const storedAnimal = localStorage.getItem('animalSelected');
	const animalData = storedAnimal ? JSON.parse(storedAnimal) : null;

	const app = document.getElementById('app');
	if (animalData) {
		app.innerHTML = `
			<h1>${animalData.nombre} Data</h1>
			<p>${animalData.habitat}</p>
			<p>${animalData.nombre} time for this race is ${animalData.segundos} seconds</p>
		`;
	} else {
		app.innerHTML = `
			<h1>Animal Data</h1>
			<p>No animal data found.</p>
		`;
	}

	socket.on('confirmAnimal', (data) => {
		// localStorage.setItem('selectedAnimalId', animalId);
		router.navigateTo('/instructions');
	});
}
