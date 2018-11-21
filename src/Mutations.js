import gql from 'graphql-tag';

export const ADD_RECIPE = gql `
mutation AddRecipeMutation($title: String!, 
  $source_url: String!, 
  $image_url: String!
  $publisher: String!, 
  $publisher_url: String!){
    addRecipe(recipe: {
      title: $title, source_url: $source_url, image_url: $image_url,
      publisher: $publisher, publisher_url: $publisher_url
    }){
      title
      source_url
      image_url
      publisher
      publisher_url
    }
  }
`

export const CREATE_USER = gql `
mutation CreateUserMutation($email: String!, $password: String!){
  signup(email: $email, password: $password)
}
`;

export const LOGIN = gql `
mutation LoginMutation($email: String!, $password: String!){
  login(email: $email, password: $password)
}
`;