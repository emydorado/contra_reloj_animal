import renderAdScreen from './Screens/ad_screen.js';
import renderAnimalData from './Screens/animal_data.js';
import renderInstructions from './Screens/instructions.js';
import renderStartGame from './Screens/start_game.js';
import renderTimer from './Screens/timer.js';
import renderLoser from './Screens/loser.js';
import renderWinner from './Screens/winner.js';
import renderSelectAnimal from './Screens/select_animal.js';
import socket from './socket.js';

function updateBodyClass(className) {
	document.body.className = className; // Reemplaza cualquier clase existente
}

function clearAppContent() {
	const app = document.getElementById('app');
	if (app) {
		app.innerHTML = ''; // Limpia el contenido del div con id "app"
	}
}

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
	updateBodyClass('ad-screen');
	renderAdScreen();
});

router.add('/animalData/(:any)', async (word) => {
	clearScripts();
	updateBodyClass('animal-data');
	renderAnimalData(word);
});

router.add('/instructions', async () => {
	clearScripts();
	updateBodyClass('instructions');
	renderInstructions();
});

router.add('/selectAnimal', async () => {
	clearScripts();
	updateBodyClass('selectAnimal');
	renderSelectAnimal();
});

router.add('/startGame', async () => {
	clearScripts();
	updateBodyClass('startGame');
	renderStartGame();
});

router.add('/timer', async (word) => {
	clearScripts();
	updateBodyClass('timer');
	renderTimer(word);
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
