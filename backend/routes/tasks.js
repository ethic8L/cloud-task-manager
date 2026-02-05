const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

router.use(auth);

router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    userId: req.user.id
  });

  await task.save();
  res.json(task);
});

router.put("/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;
