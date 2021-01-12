import { ApolloServer, gql } from 'apollo-server-micro';
import { commentType } from '../../modules/comments/comments.graphql';
import { commentMutation, commentQuery } from '../../modules/comments/comments.resolver';
import { newsMutation, newsQuery } from '../../modules/news/news.resolver';
import { newsType } from '../../modules/news/news.graphql';
import connectDb from '../../utils/db';

connectDb();

const typeDefs = gql`
  ${commentType}
  ${newsType}
  type Query {
    getAllComments: [Comment]
    getAllNews: [News]
  }
  type Mutation {
    addComment(comment: String): Comment
    addNews(image: String, title: String, text: String): News
  }
`;

const resolvers = {
  Query: {
    ...commentQuery,
    ...newsQuery
  },
  Mutation: {
    ...commentMutation,
    ...newsMutation
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({
  path: '/api/graphql',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;