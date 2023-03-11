module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", products.create);
  
    // Retrieve all Products
    router.get("/", products.getAll);
  
    // Update a Product by id
    router.put("/:id", products.update);
  
    // Delete a Product by id
    router.delete("/:id", products.delete);
  
    app.use('/api/products', router);
  };