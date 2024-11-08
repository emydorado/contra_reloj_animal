import { socket } from '../routes.js';

export default function renderSensor() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Sensor Functions</h1>
        <button id="firstLine">User crossed first line</button>
        <div id="secondLine" style="display: none;">
            <button id="btnSecondLine">User crossed second line</button>
        </div>
        <button id="winner" style="display: none;">Reveal winner</button>
    `;

	document.getElementById('firstLine').addEventListener('click', () => {
		socket.emit('userCrossedFirstLine');
		document.getElementById('firstLine').style.display = 'none';
		document.getElementById('secondLine').style.display = 'block';
	});

	document.getElementById('btnSecondLine').addEventListener('click', () => {
		socket.emit('userCrossedSecondLine');
		document.getElementById('winner').style.display = 'block';
	});

	socket.on('userWins', () => {
		alert('User wins!');
	});

	socket.on('animalWins', () => {
		alert('Animal wins!');
	});
}
