const dotenv = require("dotenv");
const connectDB = require("./db/index.js");
const app = require("./app.js");
dotenv.config();

//Call the function to connect to DB
connectDB();

//Start the server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
