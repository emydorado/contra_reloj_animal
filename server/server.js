const { createServer } = require('http');
require('dotenv/config');
const { sendEmail, sendEmailWithTemplate } = require('./services/brevo');
const app = require('./app.js');
const { initSocket } = require('./socket.js');

app.post('/send-email', async (request, response) => {
	const { body } = request;
	// await sendEmail();
	await sendEmailWithTemplate();
	response.status(201).send(body); // We return the same object received and also I send a code 201 which means an object was created
});

const httpServer = createServer(app); // Explicity creates an HTTP server from the Express app

// Initialize Socket.IO
initSocket(httpServer);

require('./serial.js');

httpServer.listen(process.env.PORT, () => console.log(`server starting 🚀🆙✔ on http://localhost:${process.env.PORT}`));
