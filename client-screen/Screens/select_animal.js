import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Select animal</h1>
				<div id=buttons>
				<button data-id="aba237a6-3fa0-4ccc-8c3c-fa989f63c78b">León</button>
				<button data-id="f892ab3a-d1df-4d5e-9d7c-50e9212a5576>Canguro</button>
				<button data-id="93a97590-1ca6-421e-af7b-1a8f6fa0ccd4">Mono</button>
				<button data-id="f50d4b1e-0041-4006-a250-aac6e477f2de">Tortuga</button>
				<button data-id="59f1c70a-808c-4fb4-9fdd-cb307c1b780d">Pato</button>
				<button data-id="789c2d3b-650e-4199-a8c0-dc9aa797663c">Flamenco</button>
				<button data-id="9863bae1-dcee-41c0-a3b9-982b97efbe07">Antílope</button>
				<button data-id="b7a28f2f-a699-4d8c-b4c2-01e1ac008296">Colibrí</button>
				<button data-id="ee7417f6-6dff-4f15-ba9a-82e8d3ef3ae6">Tucán</button>
				</div>
				<button id="selectAnimal">Select animal</button>
    `;
}
