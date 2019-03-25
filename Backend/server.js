const app = require("./deliver-missions");
const debug = require("debug")("node-angular");
const http = require("http");
require("./db");














// this makes sure the port s good
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // namedd piipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};



//when an errorr occurs
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};


// this needs to be commented
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};


//this needs to be commented
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);


//launching the server
const server = http.createServer(app);
console.log('Server.js Started')
server.on("error", onError);
server.on("listening", onListening);
server.listen(3002);
