const request = require("request");

const latitudeLongtitude = require("./data/mapboxapi");

const forecast = require("./data/wheatherapi");

latitudeLongtitude(process.argv[2], (error, data) => {
  console.log("ERROR:", error);
  console.log("data:", data);
  forecast(data.latitude, data.longtitude, (error, data) => {
    console.log("ERROR:", error);
    console.log("data:", data);
  });
});
