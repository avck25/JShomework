const http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    verify = '/api/parsetime';
let theTime;

var server = http.createServer((request, response) => {
    let parsed = url.parse(request.url, true);
    var date = new Date(parsed.query.iso);
    console.log(parsed.pathname);
    if (parsed.pathname === '/api/parsetime') {
        response.setHeader('Content-type', 'application/json');
        theTime = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        response.end(JSON.stringify(theTime));
    } else if (parsed.pathname === '/api/unixtime') {
        theTime = {
            unixtime: date.getTime()
        };
        response.end(JSON.stringify(theTime));
    }
});
server.listen(process.argv[2]);
