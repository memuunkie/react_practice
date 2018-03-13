import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
	static propTypes = {
		// create an array of the properties for rendering
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	};
	render() {
		// map the recipes array to create element
		const recipes = this.props.recipes.map((recipe, id) => (
			<Recipe key={ recipe.id } { ...recipe } />
		));
		return (
			<div className='recipe-list'>
				{ recipes }
			</div>
			);
	}
}

export default RecipeList;