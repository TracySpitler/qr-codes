// include dependencies then instantiate it
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require("morgan");
const cors = require("cors");

// initialize express
const app = express();

// connect to the database
const db = require('./config/mongoose');

// middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// routes
const index = require('./api/routes/index');
app.use('/', index);

// export the app
module.exports = app;
