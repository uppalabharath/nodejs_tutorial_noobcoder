// Http module 
// create web server with node js
const http = require("http");

// creating server
const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === "/") {
        response.write("Hello world from Node Server");
    } else {
        response.write("Unauthorized");
    }
    response.end();
});

// Starting and listening to server on port 3000
server.listen("3000");