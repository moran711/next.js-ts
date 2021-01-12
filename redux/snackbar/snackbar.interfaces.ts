export interface Action {
  type: string;
  payload: string | boolean
}

export interface SanckbarState {
  snackBarStatus: boolean;
  snackBarSeverity: string;
  snackBarMessage: string
}



export type SetSnackBarStatusAction = {
  type: string
  payload: boolean
}


export type SetSnackBarSeverityAction = {
  type: string
  payload: string
}


export type SetSnackBarMessageAction = {
  type: string
  payload: string
}
