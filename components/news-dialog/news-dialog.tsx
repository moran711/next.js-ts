import React, { MouseEvent } from "react";
import {Button, Dialog, Typography} from "@material-ui/core";
import { useSelector } from "react-redux";
import { newsState } from "../news-list/news-list";

const DialogWindow:React.FC<{handleClose(event:MouseEvent):void, isOpen:boolean}> = ({handleClose, isOpen}) => {
  const {title, text, image} = useSelector((state:newsState) => ({
    title: state.News.dialog.title,
    text: state.News.dialog.text,
    image: state.News.dialog.image,
  }))
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <img src={image} alt="news photo"/>
      <Typography variant="h4">{title}</Typography>
      <Typography>{text}</Typography>
      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
}
export default DialogWindow;