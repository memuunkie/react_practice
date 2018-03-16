import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
	static propTypes = {
		// create an array of the properties for rendering
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired,
	};
	render() {
		const {onDelete} = this.props;
		// map the recipes array to create element
		const recipes = this.props.recipes.map((recipe, id) => (
			<Recipe key={ recipe.id } { ...recipe } onDelete={ onDelete }/>
		));
		return (
			<div className='recipe-list'>
				{ recipes }
			</div>
			);
	}
}

export default RecipeList;