const mongoose = require("mongoose");
require("dotenv").config();
mongoose.pluralize(null);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully");
  } catch (e) {
    console.log("Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDB;
