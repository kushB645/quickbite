const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* CONNECT MONGODB */

mongoose
  .connect(
    "mongodb+srv://kushb545_db_user:TmOjzBXJ8P2s4aKj@cluster0.nhehhhm.mongodb.net/?appName=Cluster0",
  )
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log(err));

/* USER SCHEMA */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

/* SIGNUP API */

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  res.json({ message: "Signup successful" });
});

/* LOGIN API */

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ message: "Wrong password" });
  }

  res.json({
    message: "Login success",
    user: user,
  });
});

/* SERVER */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
