import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://${window.location.hostname}:4000`
});

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();