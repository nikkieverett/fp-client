import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import RecipeForm from './components/RecipeForm.js';
import RecipeCard from './components/RecipeCard.js';
import RecipeList from './components/RecipeList.js';

class NavBar extends React.Component {
  render(){
    return(
      <div className="nav">
        <div>Logo</div>
        <input placeholder="Search..."/>
      </div>
    )
  }
}

class Categories extends React.Component {
  render(){
    return(
      <div className="categories">
        <div>I'm the homepage and also a list of categories that when clicked will make a GET request of recipes by category</div>
        <div>Main Course</div>
        <div>Breakfast</div>
        <div>Dessert</div>
        <div>Appetizer</div>
        <div>Beverage</div>
        <div>Side Dish</div>
        <div>Condiment</div>
        <div>Bread</div>
      </div>
    )
  }
}


class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="App">
          <NavBar />
          <div className="main-content">
            <Route path="/" exact render={(props) => <Categories history={props.history}/>}/>
            <Route path="/recipe-search" render={(props) => <RecipeList history={props.history}/>}/>
            <Route path="/create-new-recipe" render={(props) => <RecipeForm history={props.history}/>}/>
            <Route path="/recipes/:recipeId" exact render={(props) => <RecipeCard history={props.history} recipeId={props.match.params.recipeId}/>}/>
          </div>
          <footer>
            This is a footer
          </footer>
        </div>
      </Router>

    )
  }
}

module.exports = App;
