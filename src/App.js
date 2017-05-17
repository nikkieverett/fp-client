import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { store, actions } from './store/store.js';

class RecipeForm extends React.Component(){
  //need api post request
}
class RecipeCard extends React.Component(){
  //need api get request
}
class RecipeList extends React.Component(){
  //need api get request
}


class NavBar extends React.Component(){
  render(){
    return(
      <div className = "nav-bar">
        <div>Logo</div>
        <input placeholder="Search..."/> //search on enter
      </div>
    )
  }
}
class Categories extends React.Component(){
  render(){
    return(
      <div className="categories">
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


class App extends React.Component(){
  render(){
    return(
      <Router>
        <div className = "App">
          <NavBar />
          <div className = "main-content">
            <Route path="/" exact render={(props) => <Categories history={props.history}/>}/>
            <Route path="/recipe-form" render={(props) => <RecipeForm history={props.history}/>}/>
            <Route path="/recipe/:id" render={(props) => <RecipeCard history={props.history}/>}/>
            <Route path="/recipe-list" render={(props) => <RecipeList history={props.history}/>}/>
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
