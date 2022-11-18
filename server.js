const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const utils = require("./utils");

const app = express();
dotenv.config();

const inventoryRouter = require("./routes/inventory");
const productRouter = require("./routes/product");

app.use(express.json()); // parses application/json
app.use(express.urlencoded({ extended: true })); // parses application/
app.use("/api/inventory", inventoryRouter);
app.use("/api/product", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

mongoose.connect(`${process.env.MONGOURI}`, (err) => {
  if (!err) {
    console.log("MongoDB connected!!");
  } else {
    console.log("Failed to connect to MongoDB", err);
  }
});
