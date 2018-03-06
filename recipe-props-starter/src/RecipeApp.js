import React, { Component } from 'react';
import RecipeList from './RecipeList';
import NavBar from './NavBar';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
