// static file serving using express
// http://expressjs.com/en/4x/api.html#app.use

const express = require("express");
const path = require("path");

const app = express();

// use is used add any middleware processing before passing / calling routes
// creating an alias for static folder
app.use("/public", express.static(path.join(__dirname, "static")));

// default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3002);