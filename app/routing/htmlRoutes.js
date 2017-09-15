/**
 * Alfredo Rodriguez
 * Date:
 */

module.exports = function getSites(app){

    // Basic route that sends the user first to the AJAX Page
//Main Page Route
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });

//Creating a friendList route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });


};

