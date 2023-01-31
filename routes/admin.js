const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
// the middleware will excute when every incoming request
exports.routes = router;
exports.products = products;
