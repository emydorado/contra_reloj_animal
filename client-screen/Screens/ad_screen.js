import { router, socket } from '../routes.js';

export default function renderAdScreen() {
	const app = document.getElementById('app');
	app.innerHTML = `
				<div id="hojasArriba">

	      <img src="./resources/hojasArribaIzq.png" class="hojasArribaIzq">
				<img src="./resources/hojasArribaCentro.png" class="hojasArribaCentro">
	      <img src="./resources/hojasArribaDer.png" class="hojasArribaDer">

				</div>

				<img src="./resources/mono.png" class="mono">
        <img src="./resources/venado.png" class="venado">
        <img src="./resources/tucan.png" class="tucan">

				<div id="content">
        <img src="./resources/title.png" class="title">
				<div id="discount">
        <img src="./resources/discount.png" class="discount">
				</div>
        <img src="./resources/qr.png" class="qr">
				</div>

				<div id="hojasLado">
        <img src="./resources/hojasLado.png" class="hojasLado">
				</div>

				<div id="abajo">
        <img src="./resources/abajo.png" class="abajo">
				</div>
    `;

	socket.on('userConnected', (data) => {
		console.log('User is connected:', data);
		router.navigateTo('/selectAnimal');
	});

	socket.on('AnimalHasBeenSelected', (animalId) => {
		localStorage.setItem('animalSelected', JSON.stringify(animalId));
		router.navigateTo('/animalData/' + animalId.id);
	});
}
