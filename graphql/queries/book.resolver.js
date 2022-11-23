const BookType = require("../typeDefs/book.type");
const Book = require("../../models/book");
const { GraphQLID } = require("graphql");

const bookResolver = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Book.findById(args.id);
  },
};

module.exports = bookResolver;
