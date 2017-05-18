import React from 'react';
import UserData from '../UserData.js';

class SearchBar extends React.Component {
  render(){
    return(
      <div className="nav">
        <div>Logo</div>
        <input placeholder="Search..."/>
      </div>
    )
  }
}

module.exports = SearchBar;
