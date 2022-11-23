const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");
const Author = require("../../models/author");
//? const AuthorType = require("./author.type");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: require("./author.type"),
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

module.exports = BookType;
