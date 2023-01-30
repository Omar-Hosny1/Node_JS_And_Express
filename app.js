const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  // add a middleware function
  console.log("In another middle ware");
  return res.send("<h1>Add Product Now</h1>");
});

app.use("/", (req, res, next) => {
  // add a middleware function
  console.log("In another middle ware");
  return res.send("<h1>Hello from express</h1>");
});
// the middleware will excute when every incoming request

const PORT = 3030;

app.listen(PORT, function () {
  console.log(`server runnung on http://localhost:${PORT}`);
});
