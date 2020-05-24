/*
* Primary files for the api

*/

const http = require('http');

// the server should respond to all requests with a string

const server  = http.createServer(function(req,res){
    res.end("Hello world\n");
});

// start teh server and have it listen to port 3000

server.listen(3000, function(){
    console.log("The server is listening to port 3000");
});