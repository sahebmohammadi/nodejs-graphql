const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

const inventoryData = [
  { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [14, 21] },
  { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [14, 21] },
  { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [14, 21] },
  { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [22.85, 30] },
  { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [10, 15.25] },
];

router.get("/seed", (req, res) => {
  const data = Inventory.insertMany(inventoryData);
  return res.send(inventoryData);
});

//? exact match : 1.order 2. and exact value is regarded

router.get("/exact", async (req, res) => {
  const data = await Inventory.find({ tags: ["red", "blank"] });
  return res.send(data);
});

//? $all operator : find an array that contains both the elements "red" and "blank", without regard to order or other elements in the array

router.get("/not-exact", async (req, res) => {
  const data = await Inventory.find({ tags: { $all: ["red", "blank"] } });
  return res.send(data);
});

//? Query an Array for an Element
// where tags is an array that contains the string "red" as one of its elements:

router.get("/element", async (req, res) => {
  const data = await Inventory.find({ tags: ["red"] });
  return res.send(data);
});

module.exports = router;
