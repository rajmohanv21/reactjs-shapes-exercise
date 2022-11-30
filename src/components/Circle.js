import React from 'react';

const Circle = ({ data: { generatedShapes }}) =>
	generatedShapes.map(({ style, id }) =>
		<div key={ id } className="circle" style={ style }/>)
	;

export default Circle;
