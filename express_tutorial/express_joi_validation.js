// user input validation with Express and JOI

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const JOI = require("joi");

const app = express();

// Adding thge  body parser middle ware
app.use(bodyParser.urlencoded( { extended : false } ));
//app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form_post_validate.html"));
});

app.post("/", (req, res) => {
    console.log(req.body);
    // JOI works based on schema we create
    const schema = JOI.object().keys({
        email : JOI.string().trim().email().required(),
        password : JOI.string().min(5).max(10).required()
    });
    JOI.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send("an error occurred!!");
        } else {
            console.log(result);
            res.json({ success : true });
        }
    });
});

app.listen(3000);