import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout( ()  => {
      const randInstructor = Math.floor(
        Math.random() *
        this.state.instructors.length
      );

      const hobbyIndex = Math.floor(
        Math.random() * 
        this.state.instructors[randInstructor].length
      );
      // creates a copy of original state instructors array
      const instructors = this.state.instructors.slice();
      // the below code is a no-no.
      // it's not 'creating a copy'; it's actually changing the state of
      // the original hobbies array in state.instructors because
      // it's still referencing the hobbies array, not a copy
      // instructors[randInstructor].hobbies.splice(hobbyIndex,1
      instructors[randInstructor] = Object.assign({}, instructors[randInstructor]);
      // above is making a copy of the original object.
      // below a new array is made from the original state array.
      instructors[randInstructor].hobbies = instructors[randInstructor].hobbies.slice();
      instructors[randInstructor].hobbies.splice(hobbyIndex, 1);
      this.setState({instructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;