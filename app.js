const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests

app.use("/add-product", (req, res, next) => {
  return res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  return res.send("<h1>Hello from express</h1>");
});
// the middleware will excute when every incoming request

const PORT = 3030;

app.listen(PORT, function () {
  console.log(`server runnung on http://localhost:${PORT}`);
});
