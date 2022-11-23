const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const graphQLSchema = require("../graphql/index.graphql");
const inventoryRouter = require("./inventory");
const productRouter = require("./product");

router.use("/api/inventory", inventoryRouter);
router.use("/api/product", productRouter);

router.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
);

module.exports = {
  allRoutes: router,
};
