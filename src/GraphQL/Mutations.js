import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: Email!
    $password: String!
    $phoneNumber: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
    ) {
      __typename
      ... on UserRegisterResultSuccess {
        token
      }
      ... on BadRequest {
        message
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: Email!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      ... on UserLoginResultSuccess {
        token
      }
      ... on BadRequest {
        message
      }
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($email: Email!) {
    resetPassword(email: $email) {
      __typename
      ... on UserResetPasswordResultSuccess {
        message
      }
      ... on BadRequest {
        message
      }
    }
  }
`;
