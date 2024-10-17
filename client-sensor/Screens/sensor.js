import { router, socket } from '../routes.js';

export default function renderSensor() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Sensor Functions</h1>
				<div>
        <button id="firstLine">User crossed first line</button>
        <div id="secondLine" style="display: none;">
            <button id="btnSecondLine">User crossed second line</button>
        </div>
				</div>
        <button id="winner">Reveal winner</button>
    `;

	document.getElementById('firstLine').addEventListener('click', () => {
		socket.emit('userCrossedFirstLine');

		document.getElementById('firstLine').style.display = 'none';
		document.getElementById('secondLine').style.display = 'block';
	});

	document.getElementById('btnSecondLine').addEventListener('click', () => {
		socket.emit('userCrossedSecondLine');
	});
}
