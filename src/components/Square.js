import React from 'react';
import squareService from '../services/SquareShape';

const Square = (context) => {
	const squares = squareService.generateSquareShapes(context);

	return squares.map(({ style, id }) =>
		<div key={ id } className="square" style={ style }/>);
};

export default Square;
