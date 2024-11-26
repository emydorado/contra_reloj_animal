import { router, socket } from '../routes.js';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
			<h1 id="title">Ingresa tus datos</h1>
			<p id="Nombre">Insert your data so we can send your prize</p>
			<input type="text" placeholder="Name" id="name"/>
			<input type="text" placeholder="Last Name" id="lastname"/>
			<input type="text" placeholder="Email" id="email"/>
			<button id="sendForm">Send form</button>
`;

	document.getElementById('sendForm').addEventListener('click', () => {
		const Name = document.getElementById('name').value;
		const Lastname = document.getElementById('lastname').value;
		const email = document.getElementById('email').value;

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
