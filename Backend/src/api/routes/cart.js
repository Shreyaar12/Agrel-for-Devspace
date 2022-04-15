const { join } = require("path");
const router = require("express").Router();
const Cart = require(join(__dirname, "..", "models", "Cart"));
const Crop = require(join(__dirname, "..", "models", "Crop"));
const { verifyUser } = require(join(__dirname, "..", "middleware", "auth"));

router.put("/add", verifyUser, async (req, res) => {
  const { crop, quantity } = req.body;
  // find item in crop
  const crops = await Crop.findOne({ name: crop });
  if (!crops) {
    return res.status(400).json({ message: "Crop does not exist" });
  }
  const item = crop.id;
  try {
    const cart = await Cart.findOne({ user: req.user.user.id });
    if (!cart) {
      const newCart = new Cart({
        user: req.user.user.id,
        items: [{ item, quantity }]
      });
      await newCart.save();
      return res.status(201).json({ message: "Cart created successfully" });
    }
    /// check if crop is already in cart
    // for (let i = 0; i < cart.items.length; i++) {
    //   if (cart.items[i].item === item) {
    //     cart.items[i].quantity += quantity;
    //     await cart.save();
    //     return res.status(201).json({ message: "Cart updated successfully" });
    //   }
    // }

    // const updatedCart = await Cart.findOneAndUpdate(
    //   { user: req.user.user.id },
    //   { $push: { items: { item, quantity } } },
    //   { new: true }
    // );
    // return res.status(201).json({ message: "Cart updated successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;

// to be implemented
