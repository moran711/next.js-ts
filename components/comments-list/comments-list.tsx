import { gql, useQuery, useSubscription } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import React from "react";
import CommentItem from "../comment-item";

export interface Comment {
  text: string
  date: string
  _id: string
}

interface CommentsData {
  getAllComments: Comment[]
}

const GET_ALL_COMMENTS = gql`
  query {
    getAllComments {
      _id
      text
      date
    }
  }
`;

const CommenstList:React.FC = () => {
  const {loading, data} = useSubscription<CommentsData>(GET_ALL_COMMENTS);

  
  const comments = data ? data.getAllComments: [];
  if (loading) {
    return (<CircularProgress />)
  }
  return (
      <div className="appreal">
        {comments ? comments.map(comment => (<CommentItem comment={comment} key={comment._id} />)) : 'Поки коментарів немає'}
      </div>
  );
};

export default CommenstList;
