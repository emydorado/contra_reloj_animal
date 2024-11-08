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
	return async (animalId) => {
		try {
			// Consultar Supabase para obtener el animal usando el ID
			const { data: animalData, error } = await supabase.from('Animals').select('*').eq('id', animalId);

			if (error) throw new Error(error.message);

			// Emitir el animal seleccionado al cliente
			if (animalData && animalData.length > 0) {
				io.emit('AnimalHasBeenSelected', animalData[0]);
			} else {
				console.error('Animal no encontrado');
			}
		} catch (err) {
			console.error('Error al obtener el animal:', err.message);
		}
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

let startTime = null;
let timerInterval = null;

const userCrossedFirstLine = (socket, db, io) => {
	return (data) => {
		if (timerInterval) clearInterval(timerInterval); // Reiniciar si ya había un temporizador
		startTime = Date.now();

		timerInterval = setInterval(() => {
			const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
			io.emit('timerUpdate', timeElapsed);
		}, 1000);
		io.emit('userCrossedFirstLine', userCrossedFirstLine);
	};
};

const userCrossedSecondLine = (socket, db, io) => {
	return async (data) => {
		if (!startTime) {
			console.error('Timer was not started.');
			return;
		}

		clearInterval(timerInterval);
		const endTime = Date.now();
		const timeElapsed = Math.floor((endTime - startTime) / 1000);

		console.log('Time elapsed:', timeElapsed, 'seconds');

		const animalId = 1; // Aquí debe estar la lógica para obtener el animal del usuario
		const { data: animalData, error } = await supabase.from('Animals').select('time').eq('id', animalId);

		if (error || !animalData || animalData.length === 0) {
			console.error('Error fetching animal data:', error);
			return;
		}

		const animalTime = animalData[0].time;

		if (timeElapsed < animalTime) {
			io.emit('userWins');
		} else {
			io.emit('animalWins');
		}

		startTime = null;
		io.emit('userCrossedSecondLine', userCrossedSecondLine);
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
