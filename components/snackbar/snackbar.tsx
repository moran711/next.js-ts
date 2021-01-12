import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackBarStatus } from '../../redux/snackbar/snackbar.actions';
import {SanckbarState} from '../../redux/snackbar/snackbar.interfaces';
const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

export interface snackbarState {
  Snackbar:SanckbarState
}

const SnackbarItem = () => {
  const dispatch = useDispatch();

  const { snackBarStatus, snackBarSeverity, snackBarMessage } = useSelector(
    (state:snackbarState) => ({
      snackBarStatus: state.Snackbar.snackBarStatus,
      snackBarSeverity: state.Snackbar.snackBarSeverity,
      snackBarMessage: state.Snackbar.snackBarMessage
    })
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackBarStatus(false));
  };

  return (
    <Snackbar
      id='snack-bar'
      open={snackBarStatus}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackBarSeverity}
        data-cy='snack-bar-message'
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarItem;
