import React from 'react';

function Person(props) {
	return (
		<li className="Person">
			{props.name} tiene <strong>{props.age}</strong> de edad
		</li>
	)
}

export default Person;