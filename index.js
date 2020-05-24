/*
* Primary files for the api

*/

const http = require('http');
const url = require('url');

// the server should respond to all requests with a string

const server  = http.createServer(function(req,res){

    // get the url and parse it, 
    const parseUrl = url.parse(req.url, true);

    // get the path 
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, ''); // cleaning the path


    // get the http method
    const method  = req.method.toLowerCase();
    // send the response
    res.end("Hello world\n");

    // Log the response path
    console.log('Request is received on path: '+ trimPath+'with this method: '+method);
   
});

// start teh server and have it listen to port 3000

server.listen(3000, function(){
    console.log("The server is listening to port 3000");
});