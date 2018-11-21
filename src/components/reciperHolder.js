import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeHolder extends Component{
  // return div full of Recipes from what we get from query
  render(){
    return (
      <Recipe button='save' recipe={{"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35120", "title": "Bacon Wrapped Jalapeno Popper Stuffed Chicken", "source_url": "http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html", "recipe_id": "35120", "image_url": "http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg", "social_rank": 100.0, "publisher_url": "http://closetcooking.com"}}></Recipe>
    )
  }
}

export default RecipeHolder;