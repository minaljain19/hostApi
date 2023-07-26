require("dotenv").config();
const connectDb = require("./db/connect");
const product = require("./models/product");
const productJson = require("./products.json");
const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await product.deleteMany();
    await product.create(productJson);
    console.log("suucess db");
  } catch (error) {
    console.log(error);
  }
};
start();
