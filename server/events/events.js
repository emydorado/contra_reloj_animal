const db = require('../db');
const eventHandler = require('../event_handlers/eventHandlers');

const events = (socket, io) => {
	socket.on('userConnected', eventHandler.userConnected(db, socket, io));

	socket.on('selectedAnimal', eventHandler.selectedAnimal(db, socket, io));

	socket.on('confirmation', eventHandler.confirmation(db, socket, io));

	socket.on('userRegistered', eventHandler.userRegistered(db, socket, io));

	socket.on('userTime', eventHandler.userTime(db, socket, io));

	socket.on('userWins', eventHandler.userWins(db, socket, io));

	socket.on('animalWins', eventHandler.animalWins(db, socket, io));

	socket.on('startGame', eventHandler.startGame(db, socket, io));
};

module.exports = { events };
