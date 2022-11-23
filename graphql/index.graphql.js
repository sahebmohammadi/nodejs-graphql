const addAuthorResolver = require("./mutations/addAuthor.resolver");
const addBookResolver = require("./mutations/addBook.resolver");
const authorResolver = require("./queries/author.resolver");
const authorsResolver = require("./queries/authors.resolver");
const bookResolver = require("./queries/book.resolver");
const booksResolver = require("./queries/books.resolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: bookResolver,
    author: authorResolver,
    books: booksResolver,
    authors: authorsResolver,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: addAuthorResolver,
    addBook: addBookResolver,
  },
});

const graphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = graphQLSchema;
