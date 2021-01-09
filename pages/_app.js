import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Container } from '@material-ui/core';
import createSagaMiddleware from 'redux-saga';
import '../styles/index.scss';
import Head from 'next/head';
import NavMenu from '../components/nav-menu';
import Footer from '../components/footer';
import {rootReducer} from '../redux/rootReducer';
import rootSaga from '../redux/rootSagas';
import { client } from '../utils/client';
import { ApolloProvider } from '@apollo/client';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp;
