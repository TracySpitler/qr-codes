// include dependencies then instantiate it
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require("morgan");
const cors = require("cors");

// initialize express
const app = express();

// middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// export the app
module.exports = app;
