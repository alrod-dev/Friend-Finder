/**
 * Alfredo Rodriguez
 * Date:
 */

// Dependencies
// =============================================================
module.exports = function getSites(app){

// Basic route that sends the user first to the AJAX Page
//API friends Route
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

};
