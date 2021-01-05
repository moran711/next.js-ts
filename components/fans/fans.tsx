import React from "react";
import CommentItem from "../comment-item";
import FansForm from "../fans-form";
export interface Comment {
  text: string
  date: string
  _id: string
}


const Fans:React.FC<{comments?:Comment[]}> = ({comments}) => {
  return (
    <>
      <h2 className="appeal-header">
        Appeal of fans
      </h2>
      <FansForm />
      <div className="appreal">
        {comments ? comments.map(comment => (<CommentItem comment={comment} key={comment._id} />)) : 'Поки коментарів немає'}
      </div>
    </>
  );
};

export default Fans;
