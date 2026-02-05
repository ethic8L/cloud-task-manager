const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "DONE"],
    default: "TODO"
  },
  userId: mongoose.Schema.Types.ObjectId,
  categoryId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Task", taskSchema);
