import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
        title='pasta' 
        instructions="Mix Ingredients."
        ingredients={['flour', 'water']} 
        img='https://images-gmi-pmc.edge-generalmills.com/59d9b710-99b6-41d9-ada8-7d8807da9fca.jpg'/>
      </div>
    );
  }
}

export default RecipeApp;
