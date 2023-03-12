const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.CodIdx = product.CodIdx;
  this.CodMagazin = product.CodMagazin;
  this.Denumire = product.Denumire;
  this.DataInregistrare = product.DataInregistrare;
  this.Cantitate = product.Cantitate;
  this.PretUnitar = product.PretUnitar;
};

// Add new product
Product.create = (newProduct, result) => {
    sql.query("INSERT INTO produse SET ?", newProduct, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        console.log("new product added: ", { newProduct });
        result(null, { newProduct });
    });
};
  
// Get all products (with WHERE condition if id was passed in the request)
Product.getAll = (CodIdx, result) => {
    const query = "SELECT * FROM produse";

    if (CodIdx) {
        query += ` WHERE CodIdx LIKE '%${CodIdx}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        return;
        }

        console.log("products: ", res);
        result(null, res);
    });
};

// Update a Product by id
Product.updateById = (id, product, result) => {
    sql.query(
      "UPDATE produse SET CodMagazin = ?, Denumire = ?, Cantitate = ?, PretUnitar = ? WHERE CodIdx = ?",
      [product.CodMagazin, product.Denumire, product.Cantitate, product.PretUnitar, product.CodIdx],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Product with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated product: ", { id: id, ...product });
        result(null, { id: id, ...product });
      }
    );
};

// Delete a Product by id
Product.remove = (id, result) => {
    sql.query("DELETE FROM produse WHERE CodIdx = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        } 
  
        if (res.affectedRows == 0) {
            // not found Product with the id
            result({ kind: "not_found" }, null);
            return;
        }
  
        console.log("deleted product with id: ", id);
        result(null, res);
    });
};

module.exports = Product;
