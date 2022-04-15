require("dotenv").config();
const request = require("node-superfetch");
const url = "http://api.weatherapi.com/v1";
async function getWeather(city) {
  const data = await request.get(`${url}/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`);
  return data.body;
}

async function forecast(city, days) {
  const data = await request.get(`${url}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=${days}`);
  return data.body;
}

module.exports = {
  getWeather,
  forecast
};
