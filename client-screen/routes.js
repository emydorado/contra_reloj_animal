import renderAdScreen from './Screens/ad_screen.js';
import renderAnimalData from './screens/animal_data.js';
import renderInstructions from './screens/instructions.js';
import renderSelectAnimal from './screens/select_animal.js';
import renderStartGame from './screens/start_game.js';
import renderTimer from './screens/timer.js';
import renderLoser from './screens/loser.js';
import renderWinner from './screens/winner.js';
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

router.add('/adScreen', async () => {
	clearScripts();
	renderAdScreen();
});

router.add('/animalData', async () => {
	clearScripts();
	renderAnimalData();
});

router.add('/instructions', async () => {
	clearScripts();
	renderInstructions();
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
