// Author: Alfredo Rodriguez
// File: JS - apiRoutes.js
// Date: 09/16/2017

var friendsArr = require("../data/friend");

// Dependencies
// =============================================================
module.exports = function getSites(app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function (req, res) {
        res.json(friendsArr);
    });

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        var newUserScoreArr = req.body.scores;


        var bestMatch = 0;
        var scoreCompareArr = [];

        for (var i = 0; i < friendsArr.length; i++) {

            var scoresDiff = 0;

            for (var j = 0; j < newUserScoreArr.length; j++) {

                scoresDiff += parseInt(friendsArr[i].scores[j]) - parseInt(newUserScoreArr[j]);

            }
            scoreCompareArr.push(scoresDiff);

        }

        //after all friends are compared, find best match
        for (i = 0; i < scoreCompareArr.length; i++) {
            if (scoreCompareArr[i] <= scoreCompareArr[bestMatch]) {
                bestMatch = i;

            }
        }
        console.log("this is your best match: " + bestMatch);


        //return bestMatch data
        var bff = friendsArr[bestMatch];

        console.log(bff.image + " name " + bff.name);
        res.json(bff);


        //pushes new submission into the friendsList array
        friendsArr.push(req.body);


    });

};
