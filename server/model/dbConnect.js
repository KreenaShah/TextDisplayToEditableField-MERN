const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

mongoose.set("strictQuery", true); //to suppress warning

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myRandomDB", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Error while connecting to database , exiting now...");
    process.exit(1);
  }
};
