const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express(); // Creates HTTP server
app.use(express.json()); // utility to process JSON in requests
app.use(cors()); // utility to allow clients to make requests from other hosts or ips

const httpServer = createServer(app); // Explicity creates an HTTP server from the Express app

const io = new Server(httpServer, {
	path: '/real-time',
	cors: {
		origin: '*', // Allow requests from any origin
	},
}); // Creates a WebSocket server, using the same HTTP server as the Express app and listening on the /real-time path

const db = {
	players: [],
};

app.get('/userTime', (request, response) => {
	response.send(db);
});

app.post('/onSelectedAnimal', (request, response) => {
	response.status(201).send(body); // We return the same object received and also I send a code 201 which means an object was created
});

app.post('/onConfirmation', (request, response) => {
	response.status(201).send(body);
});

app.post('/onUserData', (request, response) => {
	response.status(201).send(body);
});

app.post('/crossedFirstLine', (request, response) => {
	response.status(201).send(body);
});

app.post('/crossedSecondLine', (request, response) => {
	response.status(201).send(body);
});

io.on('connection', (socket) => {
	console.log('a user connected'); // This will be printed every time a client connects to the

	socket.on('userConnected', (userConnected) => {
		io.emit('userConnected', userConnected);
	});

	socket.on('selectedAnimal', (selectedAnimal) => {
		io.emit('selectedAnimal', selectedAnimal);
	});

	socket.on('confirmation', (confirmation) => {
		io.emit('confirmation', confirmation);
	});

	socket.on('userRegistered', (userRegistered) => {
		io.emit('userRegistered', userRegistered);
	});

	socket.on('selectedAnimal', (selectedAnimal) => {
		io.emit('selectedAnimal', selectedAnimal);
	});

	socket.on('confirmation', (confirmation) => {
		io.emit('confirmation', confirmation);
	});

	socket.on('userRegistered', (userRegistered) => {
		io.emit('userRegistered', userRegistered);
	});

	socket.on('confirmation', (confirmation) => {
		io.emit('confirmation', confirmation);
	});

	socket.on('userCrossedFirstLine', (userCrossedFirstLine) => {
		io.emit('userCrossedFirstLine', userCrossedFirstLine);
	});

	socket.on('userCrossedSecondLine', (userCrossedSecondLine) => {
		io.emit('userCrossedSecondLine', userCrossedSecondLine);
	});

	socket.on('userTime', (userTime) => {
		io.emit('userTime', userTime);
	});

	socket.on('userWins', (userWins) => {
		io.emit('userWins', userWins);
	});

	socket.on('animalWins', (animalWins) => {
		io.emit('animalWins', animalWins);
	});
});

httpServer.listen(5050, () => {
	// Starts the server on port 5050, same as before but now we are using the httpServer object
	console.log(`Server is running on http://localhost:${5050}`);
});
