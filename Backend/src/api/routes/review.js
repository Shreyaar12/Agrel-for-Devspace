const { join } = require("path");
const router = require("express").Router();
const Review = require(join(__dirname, "..", "models", "Review"));

router.get("/", async (req, res) => {
  try {
    const reviews = Review.find({});
    return res.status(200).json(reviews);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
});

router.create("/", async (req, res) => {
  const { name, review } = req.body;
  if (!name || !review) {
    return res.status(400).json({
      message: "Please provide name and review"
    });
  }
  try {
    const review = new Review({
      name,
      review
    });
    review.save();
    return res.status(201).json(review);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
