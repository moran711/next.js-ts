import { SetNewsDialogContent, SetNewsDialogOpenAction, SetNewsDialogContentAction } from "./news.interfaces";
import { SET_NEWS_DIALOG_OPEN, SET_NEWS_DIALOG_CONTENT } from "./news.types";

export function setNewsDialogOpen(open:boolean):SetNewsDialogOpenAction {
  return {
    type: SET_NEWS_DIALOG_OPEN,
    payload: open
  }
}

export function setNewsDialogContent(content:SetNewsDialogContent):SetNewsDialogContentAction {
  return {
    type: SET_NEWS_DIALOG_CONTENT,
    payload: content
  }
}
