import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
	// create a default set of properties for Recipe app
	static defaultProps = {
		recipes: [
			{
				title: 'Spaghetti',
				instructions: 'Open jar of spaghetti sauce. Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce.',
		        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
		        img: "spaghetti.jpg"
      		},
	      	{
	    		title: "Milkshake",
	        	instructions: "Combine ice cream and milk.  Blend until creamy",
	        	ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
	        	img: "milkshake.jpg"
	      	},
		    {
		        title: "Avocado Toast",
		        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
		        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
		        img: "avocado_toast.jpg"
		    }
		]
	};
	static propTypes = {
		// create an array of the properties for rendering
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	};
	render() {
		// map the recipes array to create element
		const recipes = this.props.recipes.map((recipe, index) => (
			<Recipe key={index} {...recipe} />
		));
		return (
			<div className='recipe-list'>
				{recipes}
			</div>
			);
	}
}

export default RecipeList;