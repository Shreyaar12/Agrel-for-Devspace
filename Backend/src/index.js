require("dotenv").config();
const { join } = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
var morgan = require("morgan");
require(join(__dirname, "database"));

const app = express();
app.use(morgan("combined"));
app.set("trust proxy", 1);
mongoose.Promise = global.Promise;
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
app.use(cors());

// routes
app.use("/api/v1/authenticate", require(join(__dirname, "api", "routes", "authenticate")));
app.use("/api/v1/reviews", require(join(__dirname, "api", "routes", "review")));

const port = process.env.PORT || 3000;

//Start the server
app.listen(port, () => {
  console.log("Server is up at " + port);
});