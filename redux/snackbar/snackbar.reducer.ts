import { Action, SanckbarState } from './snackbar.interfaces';
import {
  SET_SNACKBAR_MESSAGE,
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS
} from './snackbar.types';

const initialState:SanckbarState = {
  snackBarStatus: false,
  snackBarSeverity: '',
  snackBarMessage: ''
};


const snackbarReducer = (state:SanckbarState = initialState, action:Action) => {
  switch (action.type) {
  case SET_SNACKBAR_SEVERITY:
    return {
      ...state,
      snackBarSeverity: action.payload
    };
  case SET_SNACKBAR_MESSAGE:
    return {
      ...state,
      snackBarMessage: action.payload
    };
  case SET_SNACKBAR_STATUS:
    return {
      ...state,
      snackBarStatus: action.payload
    };

  default:
    return state;
  }
};

export default snackbarReducer;
