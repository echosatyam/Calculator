const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var myPort = 5001;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("port", myPort);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var x = Number(req.body.num1) + Number(req.body.num2);
  res.send("the result of the calculation is " + x);
});
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = Math.round(weight / (height * height));
  res.send("the bmi is " + bmi);
});
app.listen(myPort, function () {
  console.log("running on " + myPort);
});