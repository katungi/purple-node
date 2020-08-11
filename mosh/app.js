// <=== OS module ===>
// const fs = require('fs');

// synchronous method 
// const files = fs.readdirSync('./');
// console.log(files);

//asynchronous method - it takes in a path and a function that returns a string of files and an error


// fs.readdir('./', (files, err)=>{
//     if(err) console.log('Error', err);
//     else console.log('Result', files)
// });

// <==== Path module ===>
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// <=== Os module ====>

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // console.log('Total Memory: '+totalMemory); 

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


//<=== Event Module ====>
const EventEmitter = require('events'); // gets the class
const emitter = new EventEmitter(); // object of the class

// register a listener
emitter.on('messageLogged',()=>{
    console.log('Listener Called');
})
// takes the name and function

emitter.emit('messageLogged') // signals that an event has happened. Raises an event

