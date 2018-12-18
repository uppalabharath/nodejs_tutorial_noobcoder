// Using express router. Router can be used to delegate the routes to other files for better 
// readibility and maintainibility. 

const express = require("express");
const example = require("./routes/example");

const app = express();

// Create Custom middle ware
// Would be called on all routes as path is not specified
app.use((req, res, next) => {
    console.log(req.url, req.method);
    // Next needs to be called to specify that the processing is completed
    next();
});

// Would be called only for test route
app.use("/test", (req, res, next) => {
    console.log("test");
    console.log(req.url, req.method);
    // Next needs to be called to specify that the processing is completed
    next();
});

app.use("/example", example.route);

// No routes specified 

app.listen(3000);