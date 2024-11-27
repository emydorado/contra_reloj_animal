import { router, socket } from '../routes.js';

export default function renderStartGame() {
	const app = document.getElementById('app');
	app.innerHTML = `
		<div id="app">
		<img id="topImagen" src="./resources/topImage.png" alt="Imagen header">
		<button id="StartGame">INICIAR JUEGO</button>
		<div id="gameStatus" style="display: none;">
		<button id="gameStarted">JUEGO INICIADO</button>
		<p id="Nombre"><b>¡El tiempo iniciará una vez cruces la línea!</b></p>
		</div>
		<img id="bottomImage" src="./resources/bottomImage.png" alt="Imagen footer">
		</div>
`;

	document.getElementById('StartGame').addEventListener('click', () => {
		socket.emit('startGame', { message: 'game started!' });

		document.getElementById('StartGame').style.display = 'none';
		document.getElementById('gameStatus').style.display = 'block';
	});

	socket.on('userCrossedFirstLine', (data) => {
		router.navigateTo('/timer');
	});
}
