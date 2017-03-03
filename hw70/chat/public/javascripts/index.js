(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messageDiv = $('#messageDiv');
    const messages = $('#messages');
    let login = $('#loginForm');
    let name = login.find('input');
    login.submit(e => {
        e.preventDefault();
        if (!name.val()) {
            alert('must enter a name');
        } else {
            login.hide();
            messageDiv.show();
            console.log(name.val());
            socket.emit('saveName', name.val());
        }
    });

    socket.on('message', msg => {
        console.log(msg);

        messages.append('<span>' + msg + '</span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });
}());