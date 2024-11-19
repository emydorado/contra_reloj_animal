// const db = require('../db');
const db = require('../db/entities/users');

const {
	userConnected,
	selectedAnimal,
	confirmation,
	userRegistered,
	userTime,
	userWins,
	animalWins,
	startGame,
	userCrossedFirstLine,
	userCrossedSecondLine,
	sendWinnerPrize,
	sendLoserPrize,
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

	socket.on('userCrossedSecondLine', userCrossedSecondLine(db, socket, io));

	socket.on('userCrossedFirstLine', userCrossedFirstLine(db, socket, io));

	socket.on('sendWinnerPrize', sendWinnerPrize(db, socket, io));

	socket.on('sendLoserPrize', sendLoserPrize(db, socket, io));
};

module.exports = { events };
