'use strict';
var net = require('net'),
    server = net.createServer(function (socket) {
        let date = new Date();
        socket.end(date.getFullYear() + '-' + convert(date.getMonth() + 1) + '-' + convert(date.getDate()) + ' ' + convert(date.getHours()) + ':' + convert(date.getMinutes()) + '\n');
    });
server.listen(process.argv[2]);

function convert(number) {
    return number > 9 ? number : '0' + number;

}