const express = require("express");

const adminControllers = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product
router.get("/add-product", isAuth, adminControllers.getAddProduct);

// // /admin/add-product
router.post("/add-product", isAuth, adminControllers.postAddProduct);
// // the middleware will excute when every incoming request

router.get("/products", isAuth, adminControllers.getProducts);

router.get("/edit-product/:productId", isAuth, adminControllers.getEditProduct);

router.post("/edit-product", isAuth, adminControllers.postEditProduct);

router.post("/delete-product", isAuth, adminControllers.postDeleteProduct);

module.exports = router;
