const { SerialPort, ReadlineParser } = require('serialport');
const { getIO } = require('./socket');
const { userCrossedFirstLine, userCrossedSecondLine } = require('./event_handlers/eventHandlers');

SerialPort.list().then((ports) => {
	//   console.log("ports", ports); // this is for list all available devices connected
});

// create a port to listen and write
const port = new SerialPort({
	path: '/dev/cu.usbmodem14201',
	baudRate: 9600,
});

// Create a parser
const parser = new ReadlineParser({ delimiter: '\r\n' }); // apply the parser to our port
port.pipe(parser);

// --------------- SERIAL LISTENERS ---------------------

parser.on('data', (data) => {
	// console.log('Data flow:', data); // get data from sensor

	if (data === 'PASO SENSOR 1') {
		console.log('pasó 1');
		// getIO().emit('userCrossedFirstLine');
		userCrossedFirstLine(getIO());
	}

	if (data === 'PASO SENSOR 2') {
		console.log('pasó 2');
		// getIO().emit('userCrossedSecondLine');
		userCrossedSecondLine(getIO());
	}
});

port.on('error', (err) => {
	console.log('Error:', err.message); // this is for get all buffer data to y app
});

// -------------- SERIAL WRITES EXAMPLES -----------------

const writeSomethingExample = () => {
	// send a message to arduino
	port.write('ON\n', (err) => {
		if (err) {
			console.log('Error on write', err.message);
		}
		return true;
	});
};
