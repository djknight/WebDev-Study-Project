require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  const url = "https://us1.api.mailchimp.com/3.0/lists/be5b9bd5cb/members";
  // Send a POST request
  axios({
    method: "post",
    url: url,
    data: data,
    auth: {
      username: "key",
      password: process.env.MAILCHIMP_TOKEN,
    },
  }).catch((error) => console.error(error.response.data));
});
app.listen(3000, function (req, res) {
  console.log("server running on port 3000 ctl c to close");
});
