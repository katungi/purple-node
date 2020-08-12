// <=== OS module ===>
const fs = require('fs');

// synchronous method 
const files = fs.readdirSync('./');
console.log(files);

//asynchronous method - it takes in a path and a function that returns a string of files and an error


fs.readdir('./', (files, err)=>{
    if(err) console.log('Error', err);
    else console.log('Result', files)
});

// <==== Path module ===>
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// <=== Os module ====>

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// // console.log('Total Memory: '+totalMemory); 

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);


//<=== Event Module ====>
const EventEmmiter = require('events');
// const emmiter = new EventEmmiter();

const Logger = require('./logger')
const logger = new Logger();

logger.on('eventLogger', (arg) => {
    console.log(arg);
}) 
logger.log();

// <==== HTTP ====>

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("hell there you weirdo");
        res.end();
    }
});

server.listen(3000);

console.log("listening to port 3000....");