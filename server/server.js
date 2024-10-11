const { createServer } = require('http');

const app = require('./app.js');
const { initSocket } = require('./socket.js');

const httpServer = createServer(app); // Explicity creates an HTTP server from the Express app

initSocket(httpServer);

const { handleEvents } = require('./events');

httpServer.listen(5050, () => {
	console.log(`Server is running on http://localhost:${5050}`);
});
