import React, { Component } from 'react';
import './App.css';

const TodoItem = ({ text }) => (
  <li>{ text }</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    // bind event handler to 'this.'
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    // standard to tell browser not to do its default actions
    evt.preventDefault();
    // doing a spread on the original arrary, and adding the newTodo at the end
    const todos = [...this.state.todos, this.state.newTodo];
    // sets the state with the new todos array and sets newTodo to an empty string
    this.setState({todos, newTodo: ''});
  }

  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((text, index) => (
      <TodoItem key={ index } text={ text } />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={ this.handleSubmit }>
          <input 
            className='totodoInputdo-input'
            autoComplete='off'
            type='text'
            name='newTodo'
            placeholder='What needs to be done?'
            value={ newTodo }
            // event listener watching the input field and setting state to reflect changes
            onChange={ (evt) => this.setState({[evt.target.name]: evt.target.value}) }
          />
          <button 
            // button event handler on the form, NOT the button
            type='submit'
            className='save-button'
          >
          SAVE
          </button>
        </form>
        <div className='todo-content'>
          <ul>
            { todos }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
