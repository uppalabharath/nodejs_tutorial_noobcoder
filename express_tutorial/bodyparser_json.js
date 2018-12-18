// Handle JSON using body parser and express

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Adding thge  body parser middle ware
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form_post_json.html"));
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ success : true });
});

app.listen(3000);