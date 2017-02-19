'use strict';
const fs = require('fs');

const fileContents = fs.readdir(process.argv[2], (err, list) => {
    if (!err && list) {

        list.forEach((elem) => {
            let newString = elem.substring(elem.length - (process.argv[3].length));
            if (newString === process.argv[3] && elem !== process.argv[3]) {
                console.log(elem);
            }
        });
    }
});
