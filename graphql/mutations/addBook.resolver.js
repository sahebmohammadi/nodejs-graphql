const BookType = require("../typeDefs/book.type");
const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");
const Book = require("../../models/book");

const addBookResolver = {
  type: BookType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    const newBook = new Book({
      title: args.title,
      genre: args.genre,
      authorId: args.authorId,
    });
    return newBook.save();
  },
};

module.exports = addBookResolver;
