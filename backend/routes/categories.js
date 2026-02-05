const express = require("express");
const Category = require("../models/Category");
const auth = require("../middleware/auth");

const router = express.Router();
router.use(auth);

router.get("/", async (req, res) => {
  const cats = await Category.find({ userId: req.user.id });
  res.json(cats);
});

router.post("/", async (req, res) => {
  const cat = new Category({
    name: req.body.name,
    userId: req.user.id
  });

  await cat.save();
  res.json(cat);
});

module.exports = router;
