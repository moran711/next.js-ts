import { Button } from '@material-ui/core';
import React, { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsDialog from '../news-dialog';
import {NewsState} from '../../redux/news/news.interfaces';
import { setNewsDialogContent, setNewsDialogOpen } from '../../redux/news/news.actions';
import NewsItem from '../news-item';

export interface newsState {
  News:NewsState
}

const NewsList:React.FC = () => {
  const dispatch = useDispatch();
  const {
    isOpen 
  } = useSelector((state:newsState) => ({
    isOpen: state.News.dialog.open
  }));

  const handleCloseDialog = () => {
    dispatch(setNewsDialogOpen(false));
    dispatch(setNewsDialogContent({
      title: '',
      text: '',
      image: ''
    }));
  }

  return (
    <main className="main">
      <section className="news-list">
        <NewsItem title='Title' image='/news-img.png' text='Text' />
      </section>
      <NewsDialog  handleClose={handleCloseDialog} isOpen={isOpen} />
    </main>
  )
}

export default NewsList;