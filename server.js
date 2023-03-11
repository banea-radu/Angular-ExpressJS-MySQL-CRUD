const express = require('express');
const cors = require("cors");

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

var corsOptions = {
    origin: "*"
};

// connect to database
var dbConn = require('./config/db.config');

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a root route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to products application." });
});

require("./routes/product.routes.js")(app);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});