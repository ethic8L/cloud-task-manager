const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/tasksdb")
  .then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
  res.send("API works");
});

app.listen(3000, () => console.log("Server running"));
