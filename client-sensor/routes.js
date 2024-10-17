import renderSensor from './Screens/sensor.js';
import socket from './socket.js';

const router = new Router({
	mode: 'hash',
	page404: (path) => {
		const app = document.getElementById('app');
		app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
	},
});

function clearScripts() {
	document.getElementById('app').innerHTML = '';
}

router.add('/', async () => {
	clearScripts();
	renderSensor();
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener('popstate', () => {
	router.check();
});

document.addEventListener('DOMContentLoaded', () => {
	router.check();
});

router.check();

export { router, socket };
