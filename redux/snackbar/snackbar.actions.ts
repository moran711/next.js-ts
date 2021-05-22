import { SetSnackBarSeverityAction, SetSnackBarStatusAction, SetSnackBarMessageAction } from "./snackbar.interfaces";
import {
  SET_SNACKBAR_MESSAGE,
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS,
} from "./snackbar.types";

const setSnackBarStatus = (newSnackBarStatus):SetSnackBarStatusAction => ({
  type: SET_SNACKBAR_STATUS,
  payload: newSnackBarStatus,
});

const setSnackBarSeverity = (newSnackBarSeverity):SetSnackBarSeverityAction => ({
  type: SET_SNACKBAR_SEVERITY,
  payload: newSnackBarSeverity,
});

const setSnackBarMessage = (newSnackBarMessage):SetSnackBarMessageAction => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: newSnackBarMessage,
});

export { setSnackBarStatus, setSnackBarSeverity, setSnackBarMessage };
