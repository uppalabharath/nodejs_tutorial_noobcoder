// EJS is a templating engine
// It searches for the specofied file name in the folder named views
// Requires ejs module to be installed

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/:userQuery", (req, res) => {
    // the ejs extension is not needed as we have set the ejs view engine
    res.render("index", { dummyData : {
        loggedIn: true,
        username: "test user",
        userQuery: req.params.userQuery,
        searchResult: ["data1", "data2", "data3"]
    }});
});

app.listen(3000);