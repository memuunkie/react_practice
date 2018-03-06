import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
	// creates a 'template' of what the properties for Recipe should be
	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	}
	render() {
		// shorthand for const title = this.props.title
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, index) => (
			<li key={index}>{ing}</li>
		));
		return (
		<div className='recipe-card'>
			<div className='recipe-card-content'>
				<img className='recipe-card-img' src={img} alt={title} />
				<h3 className='recipe-title'>{title}</h3>
				<h4>Ingredients</h4>
			
				<ul>
					{ingredients}
				</ul>
				<h4>Instructions</h4>
				<p> {instructions} </p>
			</div>
		</div>
		);
	}
}

export default Recipe;