import constants from './constants.js';

const LOAD_RECIPES = { type: constants.LOAD_RECIPES };
const ADD_RECIPE = { type: constants.ADD_RECIPE};

const actions = {
  LOAD_RECIPES: LOAD_RECIPES,
  ADD_RECIPE: ADD_RECIPE
}

module.exports = actions;
