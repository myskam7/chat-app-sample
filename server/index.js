var app = require('http').createServer(),
    io = module.exports.io = require('socket.io')(app);

const SocketManager = require('./SocketManager');


const PORT = process.env.PORT || 8080;

io.connection('connection', SocketManager);

app.listen(PORT, () => {
    console.log("Connected to PORT ", + PORT);
});
