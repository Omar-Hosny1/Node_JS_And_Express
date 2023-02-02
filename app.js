const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorControllers = require("./controllers/error");

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // we can use the routes using app.use

app.use(shopRoutes);

app.use(errorControllers.get404Page);

const PORT = 3030;

app.listen(PORT, function () {
  console.log(`server runnung on http://localhost:${PORT}`);
});
// npm install --save express-handlebars@3.0
