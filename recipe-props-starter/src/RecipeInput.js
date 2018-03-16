import React, { Component } from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
	static defaultProps = {
		onClose() {},
		onSave() {},
	}

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			instructions: '',
			ingredients: [''],
			img: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);
		this.handleChangeIng = this.handleChangeIng.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// set this up so it can be used by more than one input
	handleChange(evt) {
		// listens to the form inputs
		this.setState({[evt.target.name]: evt.target.value});
	}

	handleNewIngredient(evt) {
		// listens to add new ingredient button
		const {ingredients} = this.state;
		this.setState({ingredients: [...ingredients, '']});
	}

	handleChangeIng(evt) {
		// Preps and holds ingredient list before save
		const index = Number(evt.target.name.split('-')[1]);
		const ingredients = this.state.ingredients.map((ing, i) => (
			// goddammit, orginally set to index === index let a doof
			i === index ? evt.target.value : ing
		));
		this.setState({ingredients});
	}

	handleSubmit(evt) {
		// takes the inputs from the form to turn into new recipe card, resets the form
		evt.preventDefault();
		this.props.onSave({...this.state});
		this.setState({
			title: '',
			instructions: '',
			ingredients: [''],
			img: '',
		})
	}

	render() {
		const {title, instructions, ingredients, img} = this.state;
		const {onClose} = this.props;
		let inputs = ingredients.map((ing, index) => (
			<div
				className='recipe-form-line'
				key={`ingredient-${index}`}
			>
				<label>{ index + 1 }.
					<input 
						type='text'
						name={ `ingredient-${index}` }
						value={ ing }
						size={ 45 }
						autoComplete='off'
						placeholder='Ingredient'
						onChange={ this.handleChangeIng }
					/>
				</label>
			</div>
		));
		return (
			<div className='recipe-form-container'>
				<form className='recipe-form' onSubmit={ this.handleSubmit }>
					<button
						type='button'
						className='close-button'
						onClick={ onClose }>
						X
					</button>
				
					<div className='recipe-form-line'>
						<label htmlFor='recipe-title-input'>Title</label>
						<input 
							id='recipe-title-input'
							key='title'
							name='title'
							type='text'
							value={ title }
							size={ 42 }
							autoComplete='off'
							onChange={ this.handleChange }
						/>
					</div>
					<label 
						htmlFor='recipe-instructions-input'
						style={{ marginTop: '5px'}}
					>
					Instructions
					</label>
					<textarea 
						key='ingredients'
						id='recipe-instructions-input'
						type='Instructions'
						name='instructions'
						rows='8'
						cols='50'
						autoComplete='off'
						value={ instructions }
						onChange={ this.handleChange }
					/>
					{ inputs }
					<button
						type='button'
						onClick={ this.handleNewIngredient }
						className='buttons'
					>
					+	
					</button>
					<div className='recipe-form-line'>
						<label htmlFor='recipe-img-input'>Image Url</label>
						<input 
							id='recipe-img-input'
							type='text'
							placeholder=''
							name='img'
							value={ img }
							size={ 36 }
							autoComplete='off'
							onChange={ this.handleChange }
						/>
					</div>
					<button
						type='submit'
						className='buttons'
						style={{ alignSelf: 'flex-end', marginRight:0 }}
					>
					SAVE	
					</button>
				</form>
			</div>
		);

	}
}

export default RecipeInput;