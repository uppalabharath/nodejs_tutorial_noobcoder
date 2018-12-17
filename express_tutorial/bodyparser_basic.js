// body-parser module for parsng form request data

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

const app = express();

// Mounting the body-parser module using app.use
// As path is mot specified the bodyParser is mounted for every route
app.use(bodyParser.urlencoded({ extended : false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'form_post.html'));
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send('Sucessfully posted');
});

app.listen(3000);