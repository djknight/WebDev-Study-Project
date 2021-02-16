const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//post cal
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result is " + result);
});
//bmi
app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});
app.post("/bmi", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = Math.round(weight / (height * height));
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Server Started on Port 3000" + " (hint ctrl C to close)");
});
