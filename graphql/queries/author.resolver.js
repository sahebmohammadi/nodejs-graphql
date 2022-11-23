const AuthorType = require("../typeDefs/author.type");
const Author = require("../../models/author");
const { GraphQLID } = require("graphql");

const authorResolver = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Author.findById(args.id);
  },
};

module.exports = authorResolver;
