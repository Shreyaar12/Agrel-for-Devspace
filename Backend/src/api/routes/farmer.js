const { join } = require("path");
const router = require("express").Router();
const Farmer = require(join(__dirname, "..", "models", "Farmer"));
const { verifyFarmer } = require(join(__dirname, "..", "middleware", "auth"));

router.post("/crop", verifyFarmer, async (req, res) => {
  const { name, description, details, location, openToContractFarming } = req.body;
  try {
    const farmer = await Farmer.findOne({ _id: req.user.user.id });
    if (!farmer) {
      // create new
      const newFarmer = new Farmer({
        _id: req.user.user.id,
        crops: [{
          name,
          description,
          details,
          location,
        }],
        openToContractFarming
      });
      await newFarmer.save();
    }
    
    const cropExists = farmer.crops.find(crop => crop.name === name);
    console.log(cropExists);
    if (cropExists) {
      return res.status(400).json({ message: "Crop already exists" });
    }
    const updatedFarmer = await Farmer.findOneAndUpdate(
      { _id: req.user.user.id },
      { $push: { crops: [{ name, description, details, location }] } },
      { new: true }
    );

    return res.status(201).json({ message: "Farmer updated successfully" });
  
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

});

// above works

router.get("/crop", verifyFarmer, async (req, res) => { // works
  await Farmer.findOne({ farmer: req.user.user.id })
    .then(farmer => {
      return res.status(200).json({ name: req.user.name, farmer });
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    });
});

router.put("/crop", verifyFarmer, async (req, res) => {
  const { name, description, details, location, openToContractFarming } = req.body;
  // if name exists in array of farmer crops
  // update the crop
  // else
  // add the crop
  //   const cropExists = Farmer.crops.find(crop => crop.name === name);
  Farmer.findOneAndUpdate({
    farmer: req.user.user.id,
    "crops.name": name
  }, {
    $set: {
      "crops.$.name": name,
      "crops.$.description": description,
      "crops.$.details": details,
      "crops.$.location": location,
      "crops.$.openToContractFarming": openToContractFarming
    }
  }, { new: true })
    .then(farmer => { 
      return res.status(201).json({ message: "Crop updated successfully" });
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    });
});

module.exports = router;