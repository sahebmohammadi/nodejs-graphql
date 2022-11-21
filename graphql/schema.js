const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} = require("graphql");

// 1. create schema type
// 2. create query
// 3. create mutation

const books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const authors = [
  { name: "Patrick Rothfuss", age: 44, id: "1" },
  { name: "Brandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  },
});
const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        const book = books.find((b) => b.id == args.id);
        return book;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        const author = authors.find((a) => a.id === args.id);
        return author;
      },
    },
  },
});

const graphQLSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = graphQLSchema;
