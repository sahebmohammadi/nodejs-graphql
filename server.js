const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mongooseQuery = require("./mongoose/mongoose.query");
const { allRoutes } = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json()); // parses application/json
app.use(express.urlencoded({ extended: true })); // parses application/
app.use(allRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

mongoose.connect(`${process.env.MONGOURI}`, (err) => {
  if (!err) {
    console.log("MongoDB connected!!");
  } else {
    console.log("Failed to connect to MongoDB", err);
  }
});
