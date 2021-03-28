const express = require("express");
const bodyParser = require("body-parser");
const request = require("requests");

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
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  //YOURSERVER.api.mailchimp.com WHERE IS IT stupid mailchimp more like mailshrimps !!!
  const url = "https:";

  const options = {
    method: "POST",

    //api key yes yes il hide it latter...
    auth: "c8665410f5f7e4b281623c1deb7f4444-us1",
  };
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});
// for the cmd/ nodemoon starts atm
app.listen(3000, function (req, res) {
  console.log("server running on port 3000 ctl c to close");
});

//api key chimp
//c8665410f5f7e4b281623c1deb7f4444-us1

//list identity chomp
//be5b9bd5cb
