import { router, socket } from '../routes';

export default function renderScreen1() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Screen 4</h1>
        <p>This is the Screen 4</p>
    `;

	socket.on('showSomething', (data) => {
		router.navigateTo('/');
	});
}
