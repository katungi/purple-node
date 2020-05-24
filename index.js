/*
* Primary files for the api

*/

const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// the server should respond to all requests with a string

const server  = http.createServer(function(req,res){

    // get the url and parse it, 
    const parseUrl = url.parse(req.url, true);

    // get the path 
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, ''); // cleaning the path

    // get the query string as an object

    const queryStringObject = parseUrl.query;

    // get the http method
    const method  = req.method.toLowerCase();

    // get the headers as an object
    const headers = req.headers;

    // get the payload if there is any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';

    // binding to and event that the request object emits called data
    req.on('data', function(data){
        buffer += decoder.write(data);
    });

    req.on('end', function(){
        buffer += decoder.end();

    // send the response
    res.end("Hello world\n");

    // Log the response path
    console.log('Request received with these payload:', buffer);
    });
});

// start the server and have it listen to port 3000

server.listen(3000, function(){
    console.log("The server is listening to port 3000");
});