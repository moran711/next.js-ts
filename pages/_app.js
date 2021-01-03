import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container } from '@material-ui/core';
import '../styles/index.scss';
import Head from 'next/head';
import NavMenu from '../components/nav-menu';
import Footer from '../components/footer';
import {rootReducer} from '../redux/rootReducer'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Container maxWidth="lg">
        <NavMenu />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </Provider>
  );
}

export default MyApp;
