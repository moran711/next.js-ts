import { ApolloQueryResult, gql } from 'apollo-boost';
import { client } from '../utils/client';

export const getAllComments = async () => {
  const res = await client.query({
    query: gql`
      query {
        getAllComments {
          _id
          text
          date
        }
      }
    `,
  }).catch(e => console.log(e)
  );
  client.resetStore();
  return res.data.getAllComments;
};

export const addComment = async (comment:string) => {
  const res = await client.mutate({
    mutation: gql`
      mutation($comment: String!) {
        addComment(comment: $comment) {
          _id
          text
          date
        }
      }
    `,
    variables: { comment },
  });

  return res.data.addComment;
}