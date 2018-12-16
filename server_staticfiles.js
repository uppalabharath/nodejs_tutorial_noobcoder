// Server static files
const fs = require("fs");
const http = require("http");

http.createServer((request, response) => {
    const requestUrl = request.url;
    if (requestUrl === '/example_jpg') {
        const readStream = fs.createReadStream("./static/example.jpg");
        response.writeHead(200, {'Content-Type' : 'image/jpg'});
        readStream.pipe(response);
    } else if (requestUrl === '/example_json') {    
        const readStream = fs.createReadStream("./static/example.json");
        response.writeHead(200, {'Content-Type' : 'application/json'});
        readStream.pipe(response);
    } else {
        const readStream = fs.createReadStream("./static/example.html");
        response.writeHead(404, {'Content-Type' : 'text/html'});
        readStream.pipe(response);
    }
}).listen(3001);