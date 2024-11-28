import { router, socket } from '../routes.js';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
			<img id="topImage" src="./resources/confirmTopImg.png" alt="Imagen top">


			<p id="registrate">Registrate</p>
			<p id="Nombre"> Para así enviar tu bono de descuento</p>

			<div id="dataContent">
			<input type="text" placeholder="Nombre" id="name" required/>
			<input type="text" placeholder="Apellido" id="lastname" required/>
			<input type="text" placeholder="Correo Electronico" id="email" required/>
			<button id="sendForm">JUGAR</button>
			</div>

			<img id="bottomImage" src="./resources/zoologicoDeCali.png" alt="Imagen footer">

`;

	document.getElementById('sendForm').addEventListener('click', () => {
		const Name = document.getElementById('name').value;
		const Lastname = document.getElementById('lastname').value;
		const email = document.getElementById('email').value;

		if (!Name || !Lastname || !email) {
			alert('Por favor, completa todos los campos obligatorios.');
			return; // Detiene la ejecución si algún campo está vacío
		}

		const selectedanimal = JSON.parse(localStorage.getItem('animalSelected')); // Deserializar JSON
		const animalId = selectedanimal.id; // Extraer solo el ID

		console.log(Name);
		console.log(Lastname);
		console.log(email);
		console.log(animalId);

		socket.emit('userRegistered', { Name, Lastname, email, animalId });
		router.navigateTo('/startGame');
	});
}
