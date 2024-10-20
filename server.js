const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//initialize app
const app = express();

//Middleware for json
app.use(express.json());

const authRoutes = require("./routes/auth.routes.js");

//use routes
app.use("/auth", authRoutes);

app.use("/", require("./routes/index.routes.js"));

//Connect to DB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

connectDB();

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
