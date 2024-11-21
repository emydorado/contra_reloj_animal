const { SerialPort, ReadlineParser } = require("serialport");

SerialPort.list().then((ports) => {
//   console.log("ports", ports); // this is for list all available devices connected
});

// create a port to listen and write
const port = new SerialPort({
  path: "/dev/cu.usbmodem14201",
  baudRate: 9600,
});

// Create a parser
const parser = new ReadlineParser({ delimiter: "\r\n" }); // apply the parser to our port
port.pipe(parser);

// --------------- SERIAL LISTENERS ---------------------

parser.on("data", (data) => {
  console.log("Data flow:", data); // get data from sensor
  // do watever you want here with that data
  //io.emit("porValue", dataPot); // I can emit in realtime to my frontend part the value
});

port.on("error", (err) => {
  console.log("Error:", err.message); // this is for get all buffer data to y app
});

// -------------- SERIAL WRITES EXAMPLES -----------------

const writeSomethingExample = () => {
  // send a message to arduino
  port.write("ON\n", (err) => {
    if (err) {
      console.log("Error on write", err.message);
    }
    return true;
  });
};