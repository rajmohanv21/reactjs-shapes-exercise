import React from 'react';
import { range } from '@laufire/utils/collection.js';
import config from '../core/config';

let xAxis = config.initialAxis;
let yAxis = config.initialAxis;

const resetAxisValue = () => {
	xAxis = config.initialAxis;
	yAxis++;
};

const Square = ({
	state: { spaceBetweenSquares },
	config: { squareSize, squareCount },
}) => {
	let squareShape = {};

	xAxis = config.initialAxis;
	yAxis = config.initialAxis;

	const squares = range(0, squareCount).map((value, key) => {
		squareShape = {
			className: 'square',
			style: {
				left: `${ (squareSize + spaceBetweenSquares) * xAxis }px`,
				top: `${ (squareSize + spaceBetweenSquares) * yAxis }px`,
			},
		};

		(xAxis * xAxis) === squareCount ? resetAxisValue() : xAxis++;

		return <div key={ key } { ...squareShape }/>;
	});

	return <div className="square-container"> {squares} </div>;
};

export default Square;
