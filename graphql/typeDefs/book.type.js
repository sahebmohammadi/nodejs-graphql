const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  },
});

module.exports = BookType;
