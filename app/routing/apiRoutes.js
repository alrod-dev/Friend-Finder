// Author: Alfredo Rodriguez
// File: JS - apiRoutes.js
// Date: 09/16/2017


var path = require("path");

// Dependencies
// =============================================================
module.exports = function getSites(app, friendList){

// Basic route that sends the user first to the AJAX Page
//API friends Route
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

};
