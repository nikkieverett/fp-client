import React from 'react';
import UserData from './../UserData.js';
import { store } from './../store/store.js';
import actions from './../store/actions.js';

class RecipeSearch extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    this.getRecipes();
  }
  getRecipes(){
    const cb = (data) => {
      const action = Object.assign({}, actions.LOAD_RECIPES, {recipes: data} )
      store.dispatch(action);
    }
    UserData.loadRecipes(cb);
  }
  render(){
    console.log(this.state);
    let recipeList = this.state.query.recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)
    return(
      <div>
        <div>I'm the list of recipes</div>
        <div>I need to make a GET request to return query search results</div>
        <button onClick={() => this.getRecipes()}>Get the recipes!</button>
        <ul>{recipeList}</ul>
      </div>
    )
  }
}

module.exports = RecipeSearch;
