const http = require("http");

const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In the middle ware now");
  next(); // continue to the next middleware
});
app.use((req, res, next) => {
  console.log("In another middle ware");
});
// add a middleware function
// the middleware will excute when every incoming request

const server = http.createServer(app);

const PORT = 3030;

server.listen(PORT, function () {
  console.log(`server runnung on http://localhost:${PORT}`);
});
