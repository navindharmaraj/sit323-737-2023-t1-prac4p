var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var router = express.Router();
var path = __dirname + '/views/';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Services
var calculation = require("./services/calculation");


router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

app.use("/", router);
app.post("/calc/add",calculation.addition )//Function to add 2 numbers
app.post("/calc/sub",calculation.subtraction )//Function to sub 2 numbers
app.post("/calc/mul",calculation.multiplication )//Function to mul 2 numbers
app.post("/calc/div",calculation.division )//Function to div 2 numbers
app.post("/addition",calculation.n_addition )//Function to add n numbers


app.listen(3000, function () {
    console.log("Live at Port 3000");
});