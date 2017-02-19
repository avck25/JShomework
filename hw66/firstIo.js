'use strict';
const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2]);
let fileArray = fileContents.toString().split('\n').length;
console.log(fileArray - 1);

