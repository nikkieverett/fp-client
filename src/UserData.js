//ajax calls
//load all recipes -- get
//query recipes by input value -- get
//add recipe -- post
//delet recipe -- delete
//edit recipe -- put
import $ from 'jquery';
import React from 'react';

const URL = 'http://localhost:5003';

let UserData = {
  loadRecipes(cb){
    $.ajax ({
      url: `${URL}/api/recipes`
    })
    .done((data) => {
      cb(data);
      console.log('got the data', data);
    });
  },

  createRecipe() {
    $.ajax({
      url: `${URL}/api/recipes`,
      method: 'POST',
      data: {

      }
    })
    .done(() => {
      this.loadRecipes();
      console.log('finished creating recipe');
    });
  }
};

module.exports = UserData;
