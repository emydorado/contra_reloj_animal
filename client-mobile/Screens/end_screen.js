import { router, socket } from '../routes.js';

export default function renderEnd() {
	const app = document.getElementById('app');
	app.innerHTML = `
           <h1>Thanks for playing</h1>
				<p>See you at the zoo!</p>
    `;
}
