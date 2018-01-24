import React, { Component } from 'react';
// import { render } from 'react-dom';
import Person from './person.js';

class Persons extends Component {
	render() {
		return (
			<ul className="Persons">
				{
					this.props.data.persons.map((personData) => {
						return <Person {...personData}/>
					})
				}
			</ul>
		)
	}
}

export default Persons;