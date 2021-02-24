import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/api',
});

const handlerError = onError(({ response, graphQLErrors }) => {
  if(graphQLErrors){
    response.errors = graphQLErrors[0];
  }
});

const authLink = setContext((_, { headers }) => {
  
  const token = window.localStorage.getItem('REMEBERME_TOKEN');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});


const cache = new InMemoryCache();

const link = ApolloLink.from([
  handlerError,
  authLink,
  httpLink,
])

const client = new ApolloClient({
  link,
  cache
});

export default client;