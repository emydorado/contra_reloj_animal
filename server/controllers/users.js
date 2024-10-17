const db = require('../db');
const { getIO } = require('../socket');

const users = async (req, res) => {
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

module.exports = { crossedSecondLine, crossedFirstLine, users };
