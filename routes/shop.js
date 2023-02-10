const express = require("express");
const isAuth = require("../middleware/is-auth");

const routes = express.Router();

const shopControllers = require("../controllers/shop");

routes.get("/", shopControllers.getIndex);

routes.get("/products", shopControllers.getProducts);

routes.get("/products/:productId", shopControllers.getProduct);

routes.get("/cart", isAuth, shopControllers.getCart);

routes.post("/cart", isAuth, shopControllers.postCart);

routes.post("/cart-delete-item", isAuth, shopControllers.postCartDeleteProduct);

routes.post("/create-order", isAuth, shopControllers.postOrder);

routes.get("/orders", isAuth, shopControllers.getOrders);

module.exports = routes;
//npm install --save ejs pug express-handlebars
