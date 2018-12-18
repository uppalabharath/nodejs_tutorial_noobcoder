// Using expressrouter

const express = require("express");

const route = express.Router();

// Creating custom middleware that is specific to this route

route.use((req, res, next) => {
    console.log("in /example route");
    next();
});

route.get("/", (req, res) => {
    res.send("Example route hit");
});

// Exporting route so it can be accessed outside
module.exports = { route };