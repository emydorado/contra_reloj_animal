import { router, socket } from '../routes.js';

export default function renderAnimalData(id) {
	const storedAnimal = localStorage.getItem('animalSelected');
	const animalData = storedAnimal ? JSON.parse(storedAnimal) : null;

	const app = document.getElementById('app');
	if (animalData) {
		app.innerHTML = `
			<div id="topImageDiv">
  		<img id="topImage" src="./resources/contraReloj.png" alt="Imagen header">
			</div>

			<div id="img_info_title">
			<h1>Conoce más sobre el ${animalData.nombre}</h1>
			<div id="img_info">
			<div id="image">
			<img ${animalData.img}>
			</div>

			<div id="info">
			<p><b>Nombre científico: </b>${animalData.nombreCientifico}</p>
			<p><b>Familia: </b>${animalData.familia}</p>
			<p><b>Habitat: </b>${animalData.habitat}</p>
			<p><b>Altura: </b>${animalData.altura}</p>
			<p><b>Peso: </b>${animalData.peso}</p>
			<p><b>Alimentación: </b>${animalData.alimentacion}</p>
			<p><b>Velocidad: </b>${animalData.valocidad}</p>
			<h3><b>Tiempo para esta carrera: </b>${animalData.segundos}s</h3>
			</div>
			</div>
			<p>¡Este es el tiempo en el que el ${animalData.nombre} se tarda en dar 3 vueltas!</p>
			</div>
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
