const db = require('../db');

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

const winner = async (req, res, io) => {};

module.exports = { crossedSecondLine, crossedFirstLine, users, winner };
