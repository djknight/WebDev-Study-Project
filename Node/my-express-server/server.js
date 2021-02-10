const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/contact", function (req, res) {
  res.send("Contact me @something.com");
});
app.get("/about", function (req, res) {
  res.send(" about me Contact me @something.com");
});

app.listen(3000, function () {
  console.log("Server Started on Port 3000" + " (hint ctrl C to close)");
});
