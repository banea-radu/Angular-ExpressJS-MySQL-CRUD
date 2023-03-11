const Product = require("../models/product.model.js");
const uuid = require('uuid');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    // Create a Product
    const product = new Product({
        CodIdx: uuid.v1(),
        CodMagazin: req.body.CodMagazin,
        Denumire: req.body.Denumire,
        DataInregistrare: new Date(),
        Cantitate: req.body.Cantitate,
        PretUnitar: req.body.PretUnitar,
    });
  
    // Save Tutorial in the database
    Product.create(product, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        else res.send(data);
    });
};

// Retrieve all Products from the database (with condition).
exports.getAll = (req, res) => {
    const CodIdx = req.query.CodIdx;
  
    Product.getAll(CodIdx, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        else res.send(data);
    });
};

// Update a Product identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    console.log(req.body);
  
    Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                    message: "Error updating Product with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Product with id " + req.params.id
                });
            }
        } else res.send({ message: `Product was deleted successfully!` });
    });
};