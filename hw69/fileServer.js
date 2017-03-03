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

module.exports = ((request, response, next) => {
    if (request.url.length > 1) {
        const ext = path.extname(request.url);
        if (ext && contentType[ext]) {
            response.setHeader('Content-type', contentType[ext]);
        }

        if (cache[request.url]) {

            cache[request.url].accessed = new Date();
            response.end(cache[request.url].data);
        } else {

            fs.readFile('content/' + request.url, 'utf-8', (err, data) => {
                if (err) {
                    //response.setHeader('Content-type', contentType['.html']);
                    if (err.code === 'ENOENT') {

                    } else {
                        response.statusCode = 500;
                    }
                    next();
                }
                cache[request.url] = {
                    accessed: new Date(),
                    data: data,
                    loaded: new Date()
                };
                response.end(data);
            });
        }
    } else {
        next();
    }
});

const intervalTime = 5000;
setInterval(() => {
    console.log('File server cleaning cache');
    const cutOff = new Date() - intervalTime;
    Object.keys(cache).forEach(key => {
        if (cache[key].accessed < cutOff) {
            console.log('File server removing stale ', key, ' from cache');
            delete cache[key];
            return;
        }
        fs.stat('content/' + key, (err, stats) => {
            //console.log('stats', stats,'\n\n');
            //console.log('util.inspect', util.inspect(stats));
            if (stats && stats.mtime > cache[key].loaded) {
                console.log('File server removing modified ', key, ' from cache');
                delete cache[key];
            }
        });
    });

}, intervalTime);







