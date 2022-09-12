import { gql } from '@apollo/client';

const GET_FRIENDS = gql`
  query getFriends {
    friends {
      id
      name
      email
      phone
    }
  }
`;

const GET_FRIEND = gql`
  query getFriend($id: ID!) {
    friend(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { GET_FRIENDS, GET_FRIEND };