import { NewsState } from "./news.interfaces";
import { SET_NEWS_DIALOG_OPEN, SET_NEWS_DIALOG_CONTENT } from "./news.types";

const initialState:NewsState = {
  dialog: {
    open: false,
    title: "",
    text: "",
    image: "",
  },
};

export function newsReducer(state = initialState, action):NewsState {
  switch (action.type) {
    case SET_NEWS_DIALOG_OPEN:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          open: action.payload,
        },
      };
    case SET_NEWS_DIALOG_CONTENT:
      return {
        ...state,
        dialog: {
          ...action.payload,
          open: state.dialog.open
        }
      };
    default:
      return state;
  }
}
