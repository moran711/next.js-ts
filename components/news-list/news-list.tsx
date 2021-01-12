import { CircularProgress } from '@material-ui/core';
import React, { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsDialog from '../news-dialog';
import {NewsState} from '../../redux/news/news.interfaces';
import { setNewsDialogContent, setNewsDialogOpen } from '../../redux/news/news.actions';
import NewsItem from '../news-item';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';

export interface newsState {
  News:NewsState
}

export interface News {
  text: string
  title: string
  image: string
  _id: string
}

interface NewsData {
  getAllNews: News[]
}

const GET_ALL_NEWS = gql`
  query {
    getAllNews {
      _id
      text
      title
      image
    }
  }
`;


const NewsList:React.FC = () => {
  const {loading, data} = useQuery<NewsData>(GET_ALL_NEWS);
  const news = data ? data.getAllNews : [];
  
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
  if (loading) {
    return (<CircularProgress />)
  }
  
  return (
    <main className="main">
      <section className="news-list">
        {news.length ? news.map((item => (<NewsItem title={item.title} image={item.image} text={item.text} key={item._id} />))) : 'Поки немає новин'}
      </section>
      <NewsDialog  handleClose={handleCloseDialog} isOpen={isOpen} />
    </main>
  )
}

export default NewsList;