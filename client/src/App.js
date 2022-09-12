import Layout from './components/layout/Layout';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        friends: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

var nodeEnv = process.env.NODE_ENV;

const client = new ApolloClient({
  uri: nodeEnv === 'development' ? 'http://localhost:5000/graphql' : 'https://prisma-mysql-kg.herokuapp.com/graphql',
  cache,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* -----------------------------------Public Routes----------------------------------- */}

          <Route path='/' element={<Home />} />
          <Route path='*' element={<></>} />

        </Route>

      </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
