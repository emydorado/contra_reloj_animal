import { router, socket } from '../routes.js';

export default function renderInstructions() {
	const app = document.getElementById('app');
	app.innerHTML = `
	  		<img id="instructionsTop" src="./resources/instructionsTop.png" alt="Imagen top">

				<div id="instructions">
        <h1>Instrucciones del juego</h1>
				<p>1. Identificar la línea de inicio y de meta.</p>
				<p>2. Presiona ¨iniciar juego¨ y corre cuando quieras y se activará el sensor al pasar.</p>
				<p>3. Cuando llegues a la segunda linea, devuélvete hacia la pantalla.</p>
				<p>4. Tu tiempo y el del animal que elegiste aparecerá en la pantalla junto a tu premio.</p>

				<h3>Ánimo, correo feroz</h3>

				<p>Presiona <b>¨Enviar datos¨</b> cuando termines de leer</p>
				</div>

				<div id="imgBottom">
				<img id="instructionsBottom" src="./resources/intructionsBottom.png" alt="Imagen bottom">
				</div>
    `;

	socket.on('userHasRegistered', (data) => {
		router.navigateTo('/startGame');
	});
}
