const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URL;
const connectDB = () => {
  console.log("connect success");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
