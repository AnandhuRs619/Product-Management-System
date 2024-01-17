const express = require ("express");
const Router = express.Router();
const multer = require("../Middleware/multer")

const productController = require("../Controllers/productController");


Router.get("/home",productController.getProduct);
Router.post("/product",multer.array('files', 3),productController.addProduct);
Router.post("/addCategory",productController.addCategory);
Router.post("/addSubCategory",productController.addSubcategoriesWithNestedCategories);
Router.get("/get-categorydata",productController.getCategory);


module.exports=Router