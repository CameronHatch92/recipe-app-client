import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import RecipeHolder from './components/reciperHolder';
import './App.css';

class App extends Component {
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

export default App;
