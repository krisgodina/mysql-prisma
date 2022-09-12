import { gql } from '@apollo/client';

const CREATE_FRIEND = gql`
  mutation createFriend($name: String!, $email: String!, $phone: String!) {
    createFriend(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_FRIEND = gql`
  mutation deleteFriend($id: ID!) {
    deleteFriend(id: $id) {
      id
      name
      email
      phone
    }
  }
`;


const UPDATE_FRIEND = gql`
  mutation UpdateFriend(
    $id: ID!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    updateFriend(
      id: $id
      name: $name
      email: $email
      phone: $phone
    ) {
      id
      name
      email
      phone
    }
  }
`;

export { CREATE_FRIEND, DELETE_FRIEND, UPDATE_FRIEND };
