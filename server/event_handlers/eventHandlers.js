const users = require('../db/entities/users');
const { assignroles } = require('../utils/helpers');
const supabase = require('../services/supabase'); // Asegúrate de que la importación de supabase sea correcta si es necesario

const userConnected = (socket, db, io) => {
	return async (data) => {
		const userCreated = await users.getAllUsers(id);
		io.emit('userConnected', userConnected);
	};
};

const selectedAnimal = (socket, db, io) => {
	return (data) => {
		io.emit('AnimalHasBeenSelected', data);
	};
};

const confirmation = (socket, db, io) => {
	return (data) => {
		io.emit('confirmAnimal');
	};
};

const startGame = (socket, db, io) => {
	return (data) => {
		io.emit('startGame', startGame);
	};
};

const userRegistered = (socket, db, io) => {
	return async (data) => {
		try {
			const { Name, Lastname, email } = data;
			const { data: userData, error } = await supabase
				.from('Registrations')
				.insert([{ Name, Lastname, email }])
				.select();

			if (error) throw new Error(error.message);

			io.emit('userHasRegistered', userData[0]);
		} catch (err) {
			console.error('Error al registrar usuario:', err.message);
		}
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
