import { SagaIterator } from 'redux-saga';
import { takeEvery, call } from 'redux-saga/effects';
import { addComment } from '../../operations/comments.operations';
import { AddCommentAction } from './comment.interfaces';
import { ADD_COMMENT } from "./comment.types";

function* handleAddCategory({payload}:AddCommentAction):SagaIterator {
  yield call(addComment, payload);
}

export default function* commentSaga() {
  yield takeEvery(ADD_COMMENT, handleAddCategory);
}
