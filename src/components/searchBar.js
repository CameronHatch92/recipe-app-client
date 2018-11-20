import React, { Component } from 'react';

class SearchBar extends Component {
  render(){
    return (
      <form>
        <label htmlFor='search'>Recipe Search:</label>
        <input type='text' id='search'></input>
        <button type='submit'>Search!</button>
      </form>
    )
  }
}

export default SearchBar;