import { gql } from 'apollo-boost';
import { client } from '../utils/client';

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