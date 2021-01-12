import { combineReducers } from "redux";
import { newsReducer } from "./news/news.reducer";
import snackbarReducer from "./snackbar/snackbar.reducer";

export const rootReducer = combineReducers({
  News: newsReducer,
  Snackbar: snackbarReducer
})

