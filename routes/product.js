const express = require("express");
const Product = require("../models/product");
const router = express.Router();

const productsData = [
  {
    item: "journal",
    instock: [
      { warehouse: "A", qty: 5 },
      { warehouse: "C", qty: 15 },
    ],
  },
  { item: "notebook", instock: [{ warehouse: "C", qty: 5 }] },
  {
    item: "paper",
    instock: [
      { warehouse: "A", qty: 60 },
      { warehouse: "B", qty: 15 },
    ],
  },
  {
    item: "planner",
    instock: [
      { warehouse: "A", qty: 40 },
      { warehouse: "B", qty: 5 },
    ],
  },
  {
    item: "postcard",
    instock: [
      { warehouse: "B", qty: 15 },
      { warehouse: "C", qty: 35 },
    ],
  },
];


module.exports = router;
