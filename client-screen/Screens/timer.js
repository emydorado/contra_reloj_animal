import { router, socket } from '../routes';

export default function renderScreen1() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Screen 7</h1>
        <p>This is the Screen 7</p>
    `;

	socket.on('showSomething', (data) => {
		router.navigateTo('/');
	});
}
