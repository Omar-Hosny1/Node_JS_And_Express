const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const routes = express.Router();

const adminDate = require("./admin");

routes.get("/", (req, res, next) => {
  const products = adminDate.products;
  res.render("shop", { prods: products, pageTitle: "Shop Page", path: "/" });
});

module.exports = routes;
//npm install --save ejs pug express-handlebars
