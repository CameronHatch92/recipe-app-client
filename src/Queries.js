import gql from 'graphql-tag';

export const GET_RECIPES = gql`{
  recipes{
    title
      image_url
      source_url
      publisher
      publisher_url
  }    
}`

export const SEARCH = gql`
  query Search($searchTerm: String!){
    search(searchTerm: $searchTerm){
      title
      image_url
      source_url
      publisher
      publisher_url
    }
  }  
`;