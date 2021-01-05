import { ADD_COMMENT } from "./comment.types"

const initialState = {}

export function postsReducer(
  state = initialState,
  action
){
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
      }
    default:
      return state
  }
}