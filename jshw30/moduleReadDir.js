'use strict';
const fs = require('fs');
let newList = [];
function myFunction(dirName, fileExt, callBack) {

    fs.readdir(dirName, (err, list) => {
        if (err) {
            return callBack(err);
        } else {

            list.forEach((elem) => {


                let newString = elem.substring(elem.length - fileExt.length);


                if (newString === fileExt && elem !== fileExt) {

                    newList.push(elem);
                }
            });

            callBack(null, newList);

        }
    });
}

module.exports = myFunction;




