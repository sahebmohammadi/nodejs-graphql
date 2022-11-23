const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
} = require("graphql");
const Book = require("../../models/book");
//? const BookType = require("../typeDefs/book.type");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(require("../typeDefs/book.type")),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      },
    },
  }),
});

module.exports = AuthorType;
