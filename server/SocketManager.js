const io = require('./index.js').io

module.exports = function(socket) {
    console.log('Socker ID: ' + socket.id);
}