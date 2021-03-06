'use strict';

const express = require('express'),
    app = express();

// two simple middlewares
function sayHi(req, res, next) {
    res.write('Hello!');
    next();
}

function sayGoodbye(req, res, next) {
    res.end('Goodbye!');
}
///


app.use(require('./fileServer'));

app.get('/', sayHi, (req, res, next) => {
    res.write('Welcome to my express HW');
    next();
}, sayGoodbye);

app.use((req, res, next) => {
    let err = {
        status: 404,
        msg: 'Sorry. We cant find that page. Thats a 404'
    };
    next(err);
});

app.use((err, req, res, next) => {
    res.statusCode = err.status ? err.status : 500;
    res.send(err.msg ? err.msg : 'Server error. Something went wrong');
});

app.listen(80);