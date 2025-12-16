import gql from "graphql-tag";

export const SIGN_IN_MUTATION = gql`
    mutation signIn($input: SignInInput!) {
      signIn(signInInput: $input) {
        id
        name
        avatar
        accessToken
      }
    }
`;
