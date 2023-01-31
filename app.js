const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes); // we can use the routes using app.use

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const PORT = 3030;

app.listen(PORT, function () {
  console.log(`server runnung on http://localhost:${PORT}`);
});
// npm install --save express-handlebars@3.0
