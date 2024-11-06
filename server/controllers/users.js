const db = require('../db');
// import { router, socket } from '../routes.js';

const animals = [
	{ id: 1, name: 'leon', time: 5 },
	{ id: 2, name: 'tigre', time: 3 },
	{ id: 3, name: 'mono', time: 4 },
	{ id: 4, name: 'tortuga', time: 8 },
];

const users = async (req, res, io) => {
	try {
		res.status(200).json(db.users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const crossedFirstLine = async (req, res) => {
	response.status(201).send(body);
};

const crossedSecondLine = async (req, res) => {
	response.status(201).send(body);
};

const winner = async (req, res, io) => {
	const { time, animalId } = req.body;

	const currentAnimal = animals.find((animal) => animal.id === parseInt(animalId));

	if (!currentAnimal) {
		return res.status(404).send({ message: 'Animal not found' });
	}

	if (time < currentAnimal.time) {
		console.log('Player wins!');
		io.emit('userWins', { message: 'Player wins!', playerTime: time, animalTime: currentAnimal.time });

		return res.status(200).send({ message: 'Player wins!', playerTime: time, animalTime: currentAnimal.time });
	} else {
		console.log('Animal wins!');
		io.emit('animalWins', { message: 'Animal wins!', playerTime: time, animalTime: currentAnimal.time });

		return res.status(200).send({ message: 'Animal wins!', playerTime: time, animalTime: currentAnimal.time });
	}
};

module.exports = { crossedSecondLine, crossedFirstLine, users, winner };
