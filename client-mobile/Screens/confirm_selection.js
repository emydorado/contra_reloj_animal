import { router, socket } from '../routes.js';

export default function renderConfirmSelection() {
	const app = document.getElementById('app');

	//traer nombre del animal
	const animalSelected = JSON.parse(localStorage.getItem('animalSelected'));
	const animalName = animalSelected ? animalSelected.nombre : 'Animal desconocido';

	app.innerHTML = `
				<img id="topImage" src="./resources/confirmTopImg.png" alt="Imagen top">

				<div id="confirmContent">
				<p id="confirmation">¿Estás seguro que quieres seguir con este animal? ¡Lee su descripción en la pantalla!</p>
				<button id="confirmationBtn">Elegir ${animalName}</button>
				<p id="change">¿Quieres cambiar el animal que elegiste?</p>
				<button id="changeAnimal">Elegir otro animal</button>
				</div>

				<img id="bottomImage" src="./resources/bottomImage.png" alt="Imagen footer">

    `;

	document.getElementById('confirmationBtn').addEventListener('click', () => {
		socket.emit('confirmation', { message: 'Button clicked!' });
		router.navigateTo('/userData');
	});
	document.getElementById('changeAnimal').addEventListener('click', () => {
		router.navigateTo('/');
	});
}
