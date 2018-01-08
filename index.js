var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('index.html', function(err, data) {
            if(err) throw err;
            response.write(data);
              response.end();
        });
        
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "image/jpg;");
        fs.readFile('image.png', function(err, data) {
            if(err) throw err;
            response.write(data);
                response.end(); 
        });
    }
});

server.listen(8080);