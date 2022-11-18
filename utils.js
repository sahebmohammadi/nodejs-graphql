const Inventory = require("./models/inventory");
const Product = require("./models/product");

class QueryArray {
  //? match array :
  //* EXACT MATCH
  async findExactArray() {
    const data = await Inventory.find({ tags: ["red", "blank"] });
    console.log(data);
  }
  //* not exact
  async findNotExact() {
    const data = await Inventory.find({ tags: { $all: ["red", "blank"] } });
    console.log(data);
  }

  //* query an array for an elemnet
  async findAnElement() {
    const data = await Inventory.find({ tags: "red" });
    console.log(data);
  }

  //* at least one element whose value is greater than 25.

  async findDmCm() {
    const data = await Inventory.find({ dim_cm: { $gt: 25 } });
    console.log(data);
  }

  //* multiple filter condition

  async findMultiple() {
    const data = await Inventory.find({ dim_cm: { $gt: 15, $lt: 20 } });
    console.log(data);
  }

  //* Query for an Array Element that Meets Multiple Criteria

  async findMeetsCrietria() {
    const data = await Inventory.find({
      dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } },
    });
    console.log(data);
  }

  //* Query an Array by Array Length
  async findByLength() {
    const data = await Inventory.find({ tags: { $size: 3 } });
    console.log(data);
  }
}

class QueryNestedArray {
  //* Query for a Document Nested in an Array (order - exact )
  async findExactNested() {
    const data = await Product.find({
      instock: { warehouse: "A", qty: 5 },
    });

    console.log(data);
  }

  //* at least one embedded document satisfies all the specified criteria.
  //? $elemMatch
  async matchBothCriteria() {
    const data = await Product.find({
      instock: {
        $elemMatch: { warehouse: "A", qty: 5 },
      },
    });

    console.log(data);
  }

  //* same as above, but not necessarily the same embedded document
  async combinationQuery() {
    const data = await Product.find(
      {
        "instock.warehouse": "A",
        "instock.qty": 5,
      },
      { item: 1, instock: { $slice: -1 } }
    );
    console.log(data);
  }

  //* Query Condition on a Field in an Array of Documents
  async queryOnEmbededField() {
    const data = await Product.find({
      "instock.qty": { $gt: 10, $lte: 20 },
    });
    console.log(data);
  }
  //* Meets Multiple Query
  //? $elemMatch
  async matchBothCondition() {
    const data = await Product.find({
      instock: { $elemMatch: { qty: { $gt: 10, $lte: 20 } } },
    });
    console.log(data);
  }
  //* $in operator :
  async inOperator() {
    // { fieldname : {operator1:value,... }}
    const data = await Inventory.find({
      item: { $in: ["paper", "journal"] },
      qty: { $lt: 150, $gte: 20 },
      tags: { $all: ["red"] },
      // dim_cm: { $gt: 10, $lt: 15 },
      dim_cm: { $elemMatch: { $gt: 10, $lt: 15 } },
    });
    console.log(data);
  }

  //* $and operator :
  // {$and : [{condition1}, {condition2}, ...]}
  async ExplicitAndOperator() {
    const data = await Inventory.find({
      $and: [
        { item: { $in: ["paper", "journal"] } },
        { qty: { $lt: 150, $gte: 20 } },
      ],
    });
    console.log(data);
  }
  async emplicitAndOperator() {
    const data = await Inventory.find({
      item: { $in: ["paper", "journal"] },
      qty: { $lt: 150, $gte: 20 },
    });
    console.log(data);
  }
  async explictAndOnSameField() {
    const data = await Inventory.find({
      $and: [{ qty: { $ne: 25 } }, { qty: { $gt: 20 } }],
    });
    console.log(data);
  }
  async emplicitAndOnSameField() {
    const data = await Inventory.find({
      qty: { $ne: 25 },
      qty: { $gt: 20 },
    });
    // const data = await Inventory.find({
    //   qty: { $gt: 20 },
    //   qty: { $ne: 25 },
    // });
    console.log(data);
  }
  async explicitOrOnSameField() {
    const data = await Inventory.find({
      $or: [{ qty: 25 }, { qty: 45 }],
    });
    //? can also be written using $in operator :
    //* using $in instead of $or on the same field is much cleaner
    // const data = await Inventory.find({
    //   qty: { $in: [25, 45] },
    // });

    console.log(data);
  }
}

class UpdateQuery {
  async updateOne() {
    const data = await Inventory.updateOne(
      { item: "paper" },
      {
        $set: { item: "saheb", qty: 120 },
        $currentDate: { lastModified: true },
      }
    );
    console.log(data);
  }
}
// module.exports = new QueryArray().findAnElement();
// module.exports = new QueryNestedArray().explicitOrOnSameField();
// module.exports = new UpdateQuery().updateOne();
