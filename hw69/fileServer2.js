'use strict';

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    connect4 = require('./connect4'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    },
    util = require('util');
let cache = {};

var server = http.createServer((request, response) => {
    console.log(connect4(request, response));
    response.end(connect4(request, response));


    const ext = path.extname(request.url);
    /*if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }
    response.setHeader('X-Powered-By', 'PCS');*/





}).listen(80);


