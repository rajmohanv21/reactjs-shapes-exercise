import React from 'react';

const Square = ({ data: { generatedShapes }}) =>
	generatedShapes.map(({ style, id }) =>
		<div key={ id } className="square" style={ style }/>)
	;

export default Square;
