import React, { Component } from 'react';
import Recipe from './recipe';
import { Query } from 'react-apollo';
import { GET_RECIPES } from '../Queries';

class RecipeHolder extends Component {
  // return div full of Recipes from what we get from query
  render() {
    return (
      <Query query={GET_RECIPES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: {error.message}</div>
          let recipes;
          if(data.recipes){
            recipes = data.recipes.map(recipe => <Recipe recipe={recipe} />);
          }
          return (
            <div>
              {recipes}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default RecipeHolder;