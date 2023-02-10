const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControllers = require("./controllers/error");
const User = require("./models/user");
const mongoose = require("mongoose");
const session = require("express-session");
const MongodbStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const flash = require("connect-flash");

const MONGODB_URI =
  "mongodb+srv://NodeComplete:oyz2R8U6iOxFa2V4@nodecomplete.d175mol.mongodb.net/shop";

const app = express();
const store = new MongodbStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
const csrfProtection = csrf();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res, next) => {
  // these two fields will be set for the views that will render
  res.locals.csrfToken = req.csrfToken();
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});

app.use("/admin", adminRoutes); // we can use the routes using app.use
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorControllers.get404Page);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
