import React, { Component } from 'react';
import './recipe.css';
import {Mutation} from 'react-apollo';
import {ADD_RECIPE} from '../Mutations';

class SearchResult extends Component{

  recipe = this.props.recipe;


  render(){

    return(
      <div className='recipe-container'>
        <h3 className='recipe-title'>{this.recipe.title}</h3>
        <div className='recipe-body'>
          <img className='recipe-pic' alt={this.recipe.title} src={this.recipe.image_url}></img>
          <div className='recipe-info'>
            <a href={this.recipe.source_url} target={'blank'}>Get the recipe here!</a>
            <p>More from <a href={this.recipe.publisher_url} target={'blank'}>{this.recipe.publisher}</a></p>
            <button>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResult;