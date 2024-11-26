import { router, socket } from '../routes.js';

export default function renderEnd() {
	const app = document.getElementById('app');
	app.innerHTML = `
           <h1 id="titulo">Thanks for playing</h1>
				<p>See you at the zoo!</p>
    `;
}
