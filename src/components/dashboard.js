import React, { Component } from 'react';
import SearchBar from './searchBar';
import RecipeHolder from './reciperHolder';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Find Great Recipes</h1>
        <SearchBar></SearchBar>
        <RecipeHolder></RecipeHolder>
      </div>
    );
  }
}

export default Dashboard;