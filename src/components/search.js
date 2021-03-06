import React, { Component } from 'react';
import { Queries } from 'react-apollo';
import gql from 'graphql-tag';
import SearchResult from './searchResult';
import { SEARCH } from '../Queries';
import { loadAuthToken } from '../local-storage';

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = React.createRef();
    this.state = {
      searchResults: []
    }
  }
  runQuery(e) {
    e.preventDefault();

    const query = `{search(searchTerm: "${this.searchTerm.current.value}"){
      title
      image_url
      source_url
      publisher
      publisher_url
    }}`

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${loadAuthToken()}`
      },
      body: JSON.stringify({
        query
      })
    })
      .then(res => res.json())
      .then(res => this.setState({ searchResults: res.data.search }));
  }

  render() {
    const searchResults = this.state.searchResults.map((recipe,index) => <SearchResult key={index} recipe={recipe}/>)
    return (
      <div>
        <form onSubmit={(e) => this.runQuery(e)}>
          <label htmlFor='search'>Recipe Search:</label>
          <input type='text' id='search' ref={this.searchTerm}></input>
          <button type='submit'>Search!</button>
        </form>
        <div>
          {searchResults}
        </div>
      </div>
    )
  }
}

export default Search;