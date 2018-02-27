import React, { Component } from 'react';
// does not need a .css because will be a component used inside Pet.js
class HobbyList extends Component {
	render() {
		// refactor to make hobbies a seperate component
		// to emulate css, must be a JS object and a string value
		const liStyle = {fontSize: '1.5em'};
		const hobbies = ['Sleeping', 'Eating', 'Cuddling'];
		return (
			<ul>
				{hobbies.map((hobby, index) => {
				// mapping thru array and its index to create list
				return <li key={index} style={liStyle}>{hobby}</li>
				})}
			</ul>
		);
	}
}

export default HobbyList;