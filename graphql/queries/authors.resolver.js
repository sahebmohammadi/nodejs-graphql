const AuthorType = require("../typeDefs/author.type");
const Author = require("../../models/author");
const { GraphQLList } = require("graphql");

const authorsResolver = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    return Author.find({});
  },
};

module.exports = authorsResolver;
