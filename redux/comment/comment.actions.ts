import { AddCommentAction } from "./comment.interfaces";
import { ADD_COMMENT } from "./comment.types";


export function addComment(comment:string):AddCommentAction {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}