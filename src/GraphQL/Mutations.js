import { gql } from "@apollo/client";

// export const CREATE_USER_MUTATION = gql`
//   mutation register(
//     $firstName: String!
//     $lastName: String!
//     $email: Email!
//     $password: String!
//     $phoneNumber: String!
//   ) {
//     register(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//       phoneNumber: $phoneNumber
//     ) {
//        __typename
//     ... on UserRegisterResultSuccess {
//       token
//     }
//     ... on BadRequest {
//       message
//     }
//   }
//   }
// `;

export const CREATE_USER_MUTATION = gql`
  mutation {
    register(
      firstName: "Charles"
      lastName: "Ugbor"
      email: "char@mail.com"
      password: "1234"
      phoneNumber: "12345667"
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

// {
//   "firstName": "Leo",
//   "lastName": "Charles",
//   "email": "charles@gmail.com",
//   "password": "1234",
//   "phoneNumber": "09060423952"
// }
