import { ApolloServer, gql } from 'apollo-server-micro';
import commentModel from '../../models/comment.model';
import { commentType } from '../../modules/comments/comments.graphql';
import { commentMutation, commentQuery } from '../../modules/comments/comments.resolver';
import connectDb from '../../utils/db';

connectDb();

const typeDefs = gql`
  ${commentType}
  type Query {
    getAllComments: [Comment]
  }
  type Mutation {
    addComment(comment: String): Comment
  }
`;

const resolvers = {
  Query: {
    ...commentQuery
  },
  Mutation: {
    ...commentMutation
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