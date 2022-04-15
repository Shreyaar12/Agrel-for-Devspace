const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  total: { type: Number, required: true },
  sold: { type: Number, default: 0 },
});
// marketplace
module.exports = mongoose.model("Buyet_Marketplace", CropSchema);