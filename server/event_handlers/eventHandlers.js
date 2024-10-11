const { assignroles } = require('../utils/helpers');

const userConnected = (socket, db, io) => {
	return (data) => {
		io.emit('userConnected', userConnected);
	};
};

const selectedAnimal = (socket, db, io) => {
	return (data) => {
		io.emit('selectedAnimal', selectedAnimal);
	};
};

const confirmation = (socket, db, io) => {
	return (data) => {
		io.emit('confirmation', confirmation);
	};
};

const startGame = (socket, db, io) => {
	return (data) => {
		io.emit('startGame', startGame);
	};
};

const userRegistered = (socket, db, io) => {
	return (data) => {
		io.emit('userRegistered', userRegistered);
	};
};

const userCrossedSecondLine = (socket, db, io) => {
	return (data) => {
		io.emit('userCrossedSecondLine', userCrossedSecondLine);
	};
};

const userCrossedFirstLine = (socket, db, io) => {
	return (data) => {
		io.emit('userCrossedFirstLine', userCrossedFirstLine);
	};
};

const userTime = (socket, db, io) => {
	return (data) => {
		io.emit('userTime', userTime);
	};
};

const userWins = (socket, db, io) => {
	return (data) => {
		io.emit('userWins', userWins);
	};
};

const animalWins = (socket, db, io) => {
	return (data) => {
		io.emit('animalWins', animalWins);
	};
};
module.exports = {
	userConnected,
	selectedAnimal,
	confirmation,
	userRegistered,
	userCrossedSecondLine,
	userTime,
	userWins,
	animalWins,
	startGame,
	userCrossedFirstLine,
};
