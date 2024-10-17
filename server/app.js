const express = require('express');
const cors = require('cors');

const app = express(); // Creates HTTP server
app.use(express.json()); // utility to process JSON in requests
app.use(cors()); // utility to allow clients to make requests from other hosts or ips
const path = require('path');

const clientApp1Path = path.resolve(__dirname, '../client-mobile');
const clientApp2Path = path.resolve(__dirname, '../client-screen');
const clientApp3Path = path.resolve(__dirname, '../client-sensor');
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// Serve Client App 1
app.use('/app1', express.static(clientApp1Path));

// Serve Client App 2
app.use('/app2', express.static(clientApp2Path));

// Serve Client App 3
app.use('/app3', express.static(clientApp3Path));

// Catch-all route for Client App 1
app.get('/app1/*', (req, res) => {
	res.sendFile(path.join(clientApp1Path, 'index.html'));
});

// Catch-all route for Client App 2
app.get('/app2/*', (req, res) => {
	res.sendFile(path.join(clientApp2Path, 'index.html'));
});

// Catch-all route for Client App 2
app.get('/app3/*', (req, res) => {
	res.sendFile(path.join(clientApp3Path, 'index.html'));
});

const usersRouter = require('./routes/users');

app.use('/', usersRouter);

module.exports = app;
