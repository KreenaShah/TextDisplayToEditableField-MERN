const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(cors());

//imports
const userRoutes = require("./routes/userRoutes");
const connection = require("./model/dbConnect");

// Database Connection
connection();

//Defining Routes
app.use("/", userRoutes);

// server listening
const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
