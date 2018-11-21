import React, { Component } from 'react';
import Search from './search';
import RecipeHolder from './reciperHolder';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Find Great Recipes</h1>
        <Search></Search>
        <RecipeHolder></RecipeHolder>
      </div>
    );
  }
}

export default Dashboard;