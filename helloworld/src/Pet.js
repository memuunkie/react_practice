// don't need "./" if coming from node_modules
import React, { Component } from "react";
import "./Pet.css";
import HobbyList from "./HobbyList.js";

class Pet extends Component {
	render() {
		return (
			// refactored for JSX; must all have closing tags
			// inline styling not as bad in React
			// {} tells JSX to evaluate as JS
			<div className="card">
				<h2 className="name">Moxie</h2>
				<img
					src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
					alt="moxie my cat"
				/>
				<h5 style={{ fontSize: "2em", margin: "2px" }}>Hobbies:</h5>
				<HobbyList />
			</div>
		);
	}
}

export default Pet;
