const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    email: req.body.email,
    password: hash
  });

  await user.save();
  res.send("User created");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.sendStatus(401);

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.sendStatus(401);

  const token = jwt.sign({ id: user._id }, "secret123");

  res.json({ token });
});

module.exports = router;
