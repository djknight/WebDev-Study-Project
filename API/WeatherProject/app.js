const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const query = "Brisbane";
  const apiKey = "8147ee1c74bd05922b6f9d50ff695d23";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    ", AU&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, function (response) {
    //status code 200s! OK
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<p>The Current weather in Brisbane is " + weatherDescription + "</p>"
      );
      res.write("<h1> The temperature is " + temp + " degrees Celsius.</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server listening port 3000 ctrl c to close");
  console.log("https://localhost:3000/");
});
