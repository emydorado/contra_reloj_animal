import renderConfirmSelection from './Screens/confirm_selection.js';
import renderUserData from './screens/user_data.js';
import renderSelectAnimal from './Screens/select_animal.js';
import renderStartGame from './screens/start_game.js';
import renderTimer from './screens/timer.js';
import renderLoser from './Screens/loser.js';
import renderWinner from './Screens/winner.js';
import renderEnd from './Screens/end_screen.js';
import socket from './socket.js';

function updateBodyClass(className) {
	document.body.className = className; // Reemplaza cualquier clase existente
}

const router = new Router({
	// check this for more features with Router: https://github.com/Graidenix/vanilla-router
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
	updateBodyClass('ad-screen');
	renderSelectAnimal();
});

router.add('/confirmSelection', async () => {
	clearScripts();
	updateBodyClass('confirmSelection');
	renderConfirmSelection();
});

router.add('/userData', async () => {
	clearScripts();
	updateBodyClass('userData');
	renderUserData();
});

router.add('/startGame', async () => {
	clearScripts();
	updateBodyClass('startGame');
	renderStartGame();
});

router.add('/timer', async () => {
	clearScripts();
	updateBodyClass('timer');
	renderTimer();
});

router.add('/loser', async () => {
	clearScripts();
	updateBodyClass('loser');
	renderLoser();
});

router.add('/winner', async () => {
	clearScripts();
	updateBodyClass('winner');
	renderWinner();
});

router.add('/end', async () => {
	clearScripts();
	updateBodyClass('end');
	renderEnd();
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
