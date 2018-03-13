import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// creating a "template" for instructors
// stateless

const InstructorItem = props => {
  return (
    <li>
      <h3>{ props.name }</h3>
      <h4>
        Hobbies: { props.hobbies.join(', ') }
      </h4>
    </li>
  );
}

InstructorItem.propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
  }

/* this version relies on state inherited from App. Above is stateless.

  class InstructorItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    return (
      <li>
        <h3>{ this.props.name }</h3>
        <h4>
          Hobbies: { this.props.hobbies.join(', ') }
        </h4>
      </li>
    );
  }

}
*/

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
      // const instructors = this.state.instructors.slice();
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randInstructor) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          }  
        }
        return inst;

      /*  above a refactor of below; doing the same thing
        i === randInstructor ? {
          ...inst,
          hobbies: [...inst.hobbies.slice(0, hobbyIndex).concat(inst.hobbies.slice(hobbyIndex + 1, inst.hobbies.length))]
        } : inst
      */
      });

      /*the below code is a no-no.
      it's not 'creating a copy'; it's actually changing the state of
      the original hobbies array in state.instructors because
      it's still referencing the hobbies array, not a copy
      instructors[randInstructor].hobbies.splice(hobbyIndex,1
      instructors[randInstructor] = Object.assign({}, instructors[randInstructor]);
      above is making a copy of the original object.
      below a new array is made from the original state array.
      instructors[randInstructor].hobbies = instructors[randInstructor].hobbies.slice();
      instructors[randInstructor].hobbies.splice(hobbyIndex, 1);
      */
      // setState: use update function if dependant on previous state
      // use a callback to check updates cuz on setState is asynchronous
      this.setState({instructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    /*<li key={index}>
    //    <h3>{instructor.name}</h3>
    //    <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
    //  </li>
    */
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