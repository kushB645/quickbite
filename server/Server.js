

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://kushb545_db_user:TmOjzBXJ8P2s4aKj@cluster0.nhehhhm.mongodb.net/?appName=Cluster0"
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.get("/api", (req, res) => {
  res.send("Food API working");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const user = new User({ name, email, password });

  await user.save();

  res.json({ message: "Signup successful" });
});

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
    user,
  });
});

app.use(express.static(path.join(__dirname, "../dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});