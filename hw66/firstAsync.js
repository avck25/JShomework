'use strict';
const fs = require('fs');

const fileContents = fs.readFile(process.argv[2], (err, data) => {
    if (!err && data) {
        console.log(data.toString().split('\n').length - 1);
    }
});
