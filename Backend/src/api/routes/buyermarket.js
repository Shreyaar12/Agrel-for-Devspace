const { join } = require("path");
const router = require("express").Router();
const BuyerMarketPlace = require(join(__dirname, "..", "models", "BuyerMarketPlace"));
const { verifyFarmer } = require(join(__dirname, "..", "middleware", "auth"));

router.post("/add", verifyFarmer, async (req, res) => {
  const {name, description, price, total} = req.body;
  const crop = await BuyerMarketPlace.findOne({ farmer: req.user.user.id, name });
  if (crop) {
    return res.status(400).json({ message: "Crop already exists" });
  }

  try {
    const crop = new BuyerMarketPlace({
      name,
      description,
      price,
      farmer: req.user.user.id,
      total
    });
    
    await crop.save();
    return res.status(201).json({ message: "Crop created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;

// to do
