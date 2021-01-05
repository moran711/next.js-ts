import { all } from "redux-saga/effects";
import commentSaga from './comment/comment.sagas';

export default function* rootSaga() {
  yield all([
    commentSaga()
  ])
}