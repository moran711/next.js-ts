import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setNewsDialogContent, setNewsDialogOpen } from '../../redux/news/news.actions';

const NewsItem:React.FC<{title:string, text: string, image: string}> = ({title, text, image}) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setNewsDialogOpen(true)) 
    dispatch(setNewsDialogContent({
      title,
      text,
      image
    }));   
  };
  return (
    <div className="new-container">  
      <img src={image} className="new-img" alt="news photo" />
      <div className="new-body">
      <h3 className="new-title">{title}</h3>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          See more
        </Button>
      </div>
    </div>
  )
}

export default NewsItem;
