const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControllers = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("63e0d260a331a062735a08d5")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes); // we can use the routes using app.use

app.use(shopRoutes);

app.use(errorControllers.get404Page);

const PORT = 3030;

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`server runnung on http://localhost:${PORT}`);
  });
});
