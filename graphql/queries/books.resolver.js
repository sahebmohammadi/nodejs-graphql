const BookType = require("../typeDefs/book.type");
const Book = require("../../models/book");
const { GraphQLList } = require("graphql");

const booksResolver = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return Book.find({});
  },
};

module.exports = booksResolver;
