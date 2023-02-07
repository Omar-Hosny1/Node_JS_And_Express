const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControllers = require("./controllers/error");
const User = require("./models/user");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// it not parses the all data types but it can user for forms
app.use(bodyParser.urlencoded({ extended: false })); // middleware that parse the body for the incoming requests
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("63e1ecd896e567af41bef22f")
    .then((user) => {
      req.user = user;
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

mongoose
  .connect(
    "mongodb+srv://NodeComplete:oyz2R8U6iOxFa2V4@nodecomplete.d175mol.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "omar",
          email: "omar@point.com",
          cart: { items: [] },
        });
        user.save();
      }
    });

    app.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
