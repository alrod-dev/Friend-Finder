// Author: Alfredo Rodriguez
// File: JS - htmlRoutes.js
// Date: 09/16/2017


var path = require("path");

module.exports = function getSites(app){

    // Basic route that sends the user first to the AJAX Page
//Main Page Route
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

//Creating a friendList route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


};

