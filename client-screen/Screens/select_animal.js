import { router, socket } from '../routes.js';

export default function renderSelectAnimal() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Select animal</h1>
				<div id=buttons>
				<button data-id="aba237a6-3fa0-4ccc-8c3c-fa989f63c78b" id="animal1">Leon</button>
				<button data-id="f892ab3a-d1df-4d5e-9d7c-50e9212a5576" id="animal2">Canguro</button>
				<button data-id="93a97590-1ca6-421e-af7b-1a8f6fa0ccd4" id="animal3">Mono</button>
				<button data-id="f50d4b1e-0041-4006-a250-aac6e477f2de" id="animal4">Tortuga</button>
				</div>
				<button id="selectAnimal">Select animal</button>
    `;
}
