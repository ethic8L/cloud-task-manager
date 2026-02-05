require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const categoryRoutes = require("./routes/categories");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://admin:admin@cloud-task-manager.jlxwa9l.mongodb.net/?appName=cloud-task-manager")
  .then(() => console.log("MongoDB connected"));

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => console.log("Server running"));
