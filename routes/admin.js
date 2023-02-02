const express = require("express");

const adminControllers = require("../controllers/admin");

const router = express.Router();

// /admin/add-product
router.get("/add-product", adminControllers.getAddProduct);

// /admin/add-product
router.post("/add-product", adminControllers.postAddProduct);
// the middleware will excute when every incoming request

router.get("/products", adminControllers.getProducts);

router.get("/edit-product/:productId", adminControllers.getEditProduct);

router.post("/edit-product", adminControllers.postEditProduct);

router.post("/delete-product", adminControllers.postDeleteProduct);

module.exports = router;
