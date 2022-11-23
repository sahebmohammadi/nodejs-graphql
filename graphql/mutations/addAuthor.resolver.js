const AuthorType = require("../typeDefs/author.type");
const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const Author = require("../../models/author");

const addAuthorResolver = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(parent, args) {
    const author = new Author({
      name: args.name,
      age: args.age,
    });
    return author.save();
  },
};

module.exports = addAuthorResolver;
