require("dotenv").config();
const { join } = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
var morgan = require("morgan");
require(join(__dirname, "database"));

const app = express();
app.use(morgan("combined"));
mongoose.Promise = global.Promise;
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  

// routes
app.use("/api/v1/authenticate", require(join(__dirname, "api", "routes", "authenticate")));
app.use("/api/v1/review", require(join(__dirname, "api", "routes", "review")));

const port = process.env.PORT || 3000;

//Start the server
app.listen(port, () => {
  console.log("Server is up at " + port);
});