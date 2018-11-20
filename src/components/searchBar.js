import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.searchTerm = React.createRef();

  }

  handleSearch(e){
    e.preventDefault();
    console.log(this.searchTerm.current.value);
  }

  render(){
    return (
      <form onSubmit={(e) => this.handleSearch(e)}>
        <label htmlFor='search'>Recipe Search:</label>
        <input type='text' id='search' ref={this.searchTerm}></input>
        <button type='submit'>Search!</button>
      </form>
    )
  }
}

export default SearchBar;