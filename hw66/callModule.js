const myModule = require('./moduleReadDir');

myModule(process.argv[2], process.argv[3], function (err, data) {
    'use strict';
    if (err) {
        console.error("Sorry didn't work");
    } else {

        data.forEach(function (elem) {
            console.log(elem);
        });
    }
});