require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const product_route = require("./routes/products");
const connectDB = require("./db/connect");
app.get("/", (req, res) => {
  res.send("this is home page");
});
app.use("/api/products", product_route);
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("listening to server" + port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
