import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client/';

import Context from './Context';
import App from './App';

import client from './ApolloConfig';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
