const db = require('../db');
const {
	userConnected,
	selectedAnimal,
	confirmation,
	userRegistered,
	userTime,
	userWins,
	animalWins,
	startGame,
} = require('../event_handlers/eventHandlers.js');

const events = (socket, io) => {
	socket.on('userConnected', userConnected(db, socket, io));

	socket.on('selectedAnimal', selectedAnimal(db, socket, io));

	socket.on('confirmation', confirmation(db, socket, io));

	socket.on('userRegistered', userRegistered(db, socket, io));

	socket.on('userTime', userTime(db, socket, io));

	socket.on('userWins', userWins(db, socket, io));

	socket.on('animalWins', animalWins(db, socket, io));

	socket.on('startGame', startGame(db, socket, io));
};

module.exports = { events };
