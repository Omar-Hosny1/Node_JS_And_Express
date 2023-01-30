const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  return res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
// the middleware will excute when every incoming request
module.exports = router;
