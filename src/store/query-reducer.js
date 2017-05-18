import constants from './constants.js';

const initialState = {
  queryInput: '',
  recipes: [],
  category: '',
  ingredients: []
}

const queryReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.LOAD_RECIPES:
      return Object.assign({}, state, {
        recipes: action.recipes
      });


  }
  return(state);
  
  console.log('im the query reducer');
}

module.exports = queryReducer;
