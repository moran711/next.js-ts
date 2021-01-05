import React, { ReactNode } from "react";
import { formatDate } from "../../utils";
import { Comment } from "../fans/fans";


const CommentItem: React.FC<{comment:Comment}> = ({comment}) => {


  return (
    <div className="appeal-container">
          <div className="appeal-text">
            {comment.text}
          </div>
          <div className="appeal-footer">
            <div className="appeal-date">{formatDate(comment.date)}</div>
            <div className="fan-nickname">Football fan 228</div>
          </div>
        </div>
  );
};

export default CommentItem;
