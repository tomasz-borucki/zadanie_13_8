var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
        console.log('')};
        response.write('data');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('img: 'http://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/93607-3.jpg);
            response.end();
    }
});

server.listen(8080);