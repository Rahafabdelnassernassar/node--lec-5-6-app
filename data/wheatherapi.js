const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=be42f3c727504bc8bfb154112241607&q=" +
    latitude +
    "," +
    longtitude;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the weather api.", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          " is " +
          response.body.current.condition.text +
          " and the temp is " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
