export type SetNewsDialogOpenAction = {
  type: string
  payload: boolean
}

export interface SetNewsDialogContent {
  title: string
  text: string
  image: string
}

export type SetNewsDialogContentAction = {
  type: string
  payload: SetNewsDialogContent
}


export interface NewsState {
  dialog: {
    open: boolean
    title: string
    text: string
    image:string
  },
}