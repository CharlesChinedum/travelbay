import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    me {
      id
      firstName
      lastName
      firstName
      email
      phoneNumber
      createdAt
    }
  }
`;
