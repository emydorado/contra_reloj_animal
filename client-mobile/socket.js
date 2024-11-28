const socket = io('https://bbf7-190-1-218-62.ngrok-free.app', { path: '/real-time' }); // Update this to your server URL

socket.on('connect', () => {
	console.log('Connected to Socket.IO server');
});

export default socket;
