import { router, socket } from '../routes.js';

export default function renderUserData() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>form user data</h1>
				<p>Insert your data so we can send your prize</p>
			    <input type="text" placeholder="Name" id="name"/>
			    <input type="text" placeholder="Last Name" id="lastname"/>
			    <input type="text" placeholder="Email" id="email"/>
			    <button id="sendForm">Send form</button>
    `;

	document.getElementById('sendForm').addEventListener('click', () => {
		const Name = document.getElementById('name').value;
		const Lastname = document.getElementById('lastname').value;
		const email = document.getElementById('email').value;
		console.log(Name);
		console.log(Lastname);
		console.log(email);

		socket.emit('userRegistered', { Name, Lastname, email });
		router.navigateTo('/startGame');
	});
}
