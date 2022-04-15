const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isFarmer: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);