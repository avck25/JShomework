'use strict';

const http = require('http');
let myString = "";

http.get(process.argv[2], function (response) {
    response.setEncoding("utf-8");
    response.on("data", function (data) {
        myString += data;
    });
    response.on("end", function () {
        console.log(myString.length);
        console.log(myString);
    })
});