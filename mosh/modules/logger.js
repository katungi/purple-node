const EventEmmiter = require("events");

var url = "https://mylogger.io/log";

class Logger extends EventEmmiter {
  log(message) {
    //makes a HTTP requests
    // console.log(message);
    this.emit("eventLogger", { text: "hello world", url: 'https://github.com' });
  }
}

module.exports = Logger;
