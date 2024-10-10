import renderConfirmSelection from './Screens/confirm_selection.js';
import renderUserData from './screens/user_data.js';
import renderSelectAnimal from './screens/select_animal.js';
import renderStartGame from './screens/start_game.js';
import renderTimer from './screens/timer.js';
import renderLoser from './screens/loser.js';
import renderWinner from './screens/winner.js';
import socket from './socket.js';

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

router.add('/confirmSelection', async () => {
	clearScripts();
	renderConfirmSelection();
});

router.add('/startGame', async () => {
	clearScripts();
	renderStartGame();
});

router.add('/userData', async () => {
	clearScripts();
	renderUserData();
});

router.add('/selectAnimal', async () => {
	clearScripts();
	renderSelectAnimal();
});

router.add('/startGame', async () => {
	clearScripts();
	renderStartGame();
});

router.add('/timer', async () => {
	clearScripts();
	renderTimer();
});

router.add('/loser', async () => {
	clearScripts();
	renderLoser();
});

router.add('/winner', async () => {
	clearScripts();
	renderWinner();
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
