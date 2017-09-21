// Author: Alfredo Rodriguez
// File: JS - server.js
// Date: 09/16/2017

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================

var PORT = 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Routes
// =============================================================
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function () {
    console.log("App listening on PORT " + PORT);
});
