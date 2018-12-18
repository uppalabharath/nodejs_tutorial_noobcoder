
// Middle ware is some module that gets called between request from user and routing
// Similar to interceptors or filters in java

const express = require("express");

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

// No routes specified 

app.listen(3000);