const users = require('../db/entities/users');
const { getIO } = require('../socket');

const createUser = async (req, res, io) => {
	try {
		const { name, lastname, email } = req.body;
		const userCreated = await users.createUser({ name, lastname, email });
		getIO().emit('userHasRegistered', data[0]);
		res.status(200).json(data[0]);
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

//supabase controllers
const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await users.getUserById(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const updateUser = async (req, res) => {
	try {
		const { name, lastname, email } = req.body;
		const { id } = req.params;
		const userCreated = await users.updateUser(id, { name, lastname, email });
		res.status(200).json(userCreated);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const userCreated = await users.deleteUser(id);
		res.status(200).json(userCreated);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

module.exports = { crossedSecondLine, crossedFirstLine, createUser, getUser, updateUser, deleteUser, winner };
