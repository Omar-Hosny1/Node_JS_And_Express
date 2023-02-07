const express = require("express");

const routes = express.Router();

const shopControllers = require("../controllers/shop");

routes.get("/", shopControllers.getIndex);

routes.get("/products", shopControllers.getProducts);

routes.get("/products/:productId", shopControllers.getProduct);

routes.get("/cart", shopControllers.getCart);

routes.post("/cart", shopControllers.postCart);

routes.post("/cart-delete-item", shopControllers.postCartDeleteProduct);

routes.post("/create-order", shopControllers.postOrder);

routes.get("/orders", shopControllers.getOrders);

module.exports = routes;
//npm install --save ejs pug express-handlebars
