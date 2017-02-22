'use strict';

const http = require('http');
let myString1 = "",
    myString2 = "",
    myString3 = "",
    counter = 0;

function printAll() {
    console.log(myString1);
    console.log(myString2);
    console.log(myString3);
}

http.get(process.argv[2], function (response) {
    response.setEncoding("utf-8");
    response.on("data", function (data) {
        myString1 += data;
    });
    response.on("end", function () {
        counter++;
        if (counter === 3) {
            printAll();
        }
    })
});
http.get(process.argv[3], function (response) {
    response.setEncoding("utf-8");
    response.on("data", function (data) {
        myString2 += data;
    });
    response.on("end", function () {
        counter++;
        if (counter === 3) {
            printAll();
        }
    });
});

http.get(process.argv[4], function (response) {
    response.setEncoding("utf-8");
    response.on("data", function (data) {
        myString3 += data;
    });
    response.on("end", function () {
        counter++;
        if (counter === 3) {
            printAll();
        }
    });
});