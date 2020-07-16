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

        //choose the handler this reques should go to, else go to notFound
        
        var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

        //construct the data object to send to the handler
        var data {
            'trimmedPath' : trimmedPath,
            'queryStringObject' : queryStringObject,
            'method' : method,
            'headers' : headers,
            'payload' : buffer
        };

        // Route the request to the handler specified in the handler
        chosenHandler(data, function(statusCode, payload){

        });
   
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

// define our handlers
var handlers = {};

// sampler handers

handlers.sample = function(data, callback){
    // callback a http status code, and a payload object
    callback(406,{'name' : 'sample handler'});
};

// not found handler

handlers.notFound = function(data, callback){
    callback(404);
};

// Defining a request router

const router ={
    'sample' : handlers.sample
};

// TODO: continue with 18- Routing Request