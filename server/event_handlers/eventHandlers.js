const users = require('../db/entities/users');
const { assignroles } = require('../utils/helpers');
const supabase = require('../services/supabase'); // Asegúrate de que la importación de supabase sea correcta si es necesario
const { sendWinnerEmailWithTemplate, sendLoserEmailWithTemplate } = require('../services/brevo');

const userConnected = (socket, db, io) => {
	return async (data) => {
		// const userCreated = await users.getAllUsers(id);
		io.emit('userConnected', userConnected);
		console.log('userConnected');
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
			const { Name, Lastname, email, animalId } = data;
			const { data: userData, error } = await supabase
				.from('Registrations')
				.insert([{ Name, Lastname, email, animalId }])
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

		try {
			const { data: registrationData, error: registrationError } = await supabase
				.from('Registrations')
				.select('animalId')
				.order('created_at', { ascending: false })
				.limit(1);

			console.log('registrationData', registrationData);

			if (registrationError || !registrationData || registrationData.length === 0) {
				console.error('Error fetching the last registration:', registrationError || 'No registration found.');
				return;
			}

			const animalId = registrationData[0].animalId; // Extraer el valor de selectedanimal
			console.log('Animal ID:', animalId);

			// Consultar el tiempo del animal desde la base de datos
			const { data: animalData, error } = await supabase.from('Animals').select('segundos').eq('id', animalId);

			if (error || !animalData || animalData.length === 0) {
				console.error('Error fetching animal data:', error || 'Animal not found');
				return;
			}

			const animalTime = animalData[0].segundos; // Tiempo del animal en segundos
			console.log(`Animal time: ${animalTime} seconds`);

			// Comparar los tiempos y emitir el evento correspondiente
			if (timeElapsed < animalTime) {
				io.emit('userWins', { userTime: timeElapsed, animalTime: animalTime });
			} else {
				io.emit('animalWins', { userTime: timeElapsed, animalTime: animalTime });
			}
		} catch (err) {
			console.error('Error while fetching animal time:', err.message);
		} finally {
			startTime = null; // Reiniciar el tiempo de inicio para la próxima carrera
		}
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

const sendLoserPrize = (socket, db, io) => {
	return async (data) => {
		io.emit('sendedPrize');
		await sendLoserEmailWithTemplate();
	};
};

const sendWinnerPrize = (socket, db, io) => {
	return async (data) => {
		io.emit('sendedPrize');
		await sendWinnerEmailWithTemplate();
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
	sendLoserPrize,
	sendWinnerPrize,
};
