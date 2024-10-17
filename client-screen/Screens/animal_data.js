import { router, socket } from '../routes.js';

export default function renderAnimalData(word) {
	console.log(word);
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Animal Data</h1>
				<p>Waiting for animal selection...</p>
    `;

	const animals = [
		{ id: 1, name: 'leon', information: 'This is LEON data', time: '5' },
		{ id: 2, name: 'tigre', information: 'This is TIGRE data', time: '3' },
		{ id: 3, name: 'mono', information: 'This is MONO data', time: '4' },
		{ id: 4, name: 'tortuga', information: 'This is TORTUGA data', time: '8' },
	];

	const animalId = parseInt(word, 10);
	const currentAnimal = animals.find((animal) => animal.id === animalId);
	console.log('this is current animal:', currentAnimal);

	if (currentAnimal) {
		app.innerHTML = `
			<h1>${currentAnimal.name} Data</h1>
			<p>${currentAnimal.information}</p>
		`;
	} else {
		app.innerHTML = `<p>Animal not found</p>`;
	}

	socket.on('confirmAnimal', (data) => {
		router.navigateTo('/instructions');
	});
}
