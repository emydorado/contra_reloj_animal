const { events } = require('./events');

const handleEvents = (socket, io) => {
	events(socket, io);
};

module.exports = { handleEvents };
