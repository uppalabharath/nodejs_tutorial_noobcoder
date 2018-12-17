// http://expressjs.com/ 

const express = require("express");
const app = express();

// get route on root path
app.get('/', (req, res) => {
    res.send("Hello world!!");
});

app.get('/example', (req, res) => {
    res.send("example route");
});

// Route params
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hit Route with params ${req.params.name} and ${req.params.age}`);
});

// Route params for mandatory things and query params for optional data

app.listen(3000);