import React, { Component } from 'react';
import './recipe.css';
import {Mutation} from 'react-apollo';
import {ADD_RECIPE} from '../Mutations';
import { GET_RECIPES } from '../Queries';

class SearchResult extends Component{

  recipe = this.props.recipe;


  render(){
    const {title, image_url, source_url, publisher, publisher_url} = this.recipe;
    return(
      <div className='recipe-container'>
        <h3 className='recipe-title'>{this.recipe.title}</h3>
        <div className='recipe-body'>
          <img className='recipe-pic' alt={this.recipe.title} src={this.recipe.image_url}></img>
          <div className='recipe-info'>
            <a href={this.recipe.source_url} target={'blank'}>Get the recipe here!</a>
            <p>More from <a href={this.recipe.publisher_url} target={'blank'}>{this.recipe.publisher}</a></p>
            <Mutation mutation={ADD_RECIPE} variables={{title, image_url, source_url, publisher, publisher_url}}
            update={(store, {data}) => {
              const currentStoreState = store.readQuery({query: GET_RECIPES});
              let newStoreState;
              console.log(data.addRecipe);
              if(currentStoreState.recipes){
                newStoreState = [...currentStoreState.recipes, data.addRecipe];
              }else{
                newStoreState = [data.addRecipe];
              }
              store.writeQuery({
                query: GET_RECIPES,
                data: {recipes: newStoreState}
              })
            }}>
              {parsedLink => <button onClick={parsedLink}>Save Recipe!</button>}
            </Mutation>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResult;