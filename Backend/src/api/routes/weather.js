// prediction of some hours
// paddy at 80th date
// rain is not good for it 
// action by farmer required
//
// weather 


// to do
const { join } = require("path");
const router = require("express").Router();
const { getWeather } = require(join(__dirname, "..", "functions", "weather"));


router.get("/", async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ message: "City is required" });  
  try {
    // need to parse the response
    // add checks 
    const data = await getWeather(city);
    if (!data) return res.status(400).json({ message: "City not found" });
    const response = {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      region: data.location.region,
      condition: data.current.condition.text
    };
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
