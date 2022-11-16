import React from 'react';
import config from '../core/config';
import { range } from '@laufire/utils/collection.js';

let xAxis = config.initialAxis;
let yAxis = config.initialAxis;
const squareCount = 9;

const resetAxisValue = () => {
	xAxis = config.initialAxis;
	yAxis++;
};

const Square = ({ state: { spaceBetweenSquares }, config: { squareSize }}) => {
	let squareShape = {};

	const squares = range(0, squareCount).map((value, key) => {
		((xAxis * xAxis) === squareCount) && resetAxisValue();

		squareShape = {
			className: 'square',
			style: {
				left: `${ (squareSize + spaceBetweenSquares) * xAxis }px`,
				top: `${ (squareSize + spaceBetweenSquares) * yAxis }px`,
			},
		};
		xAxis++;

		return <div key={ key } { ...squareShape }/>;
	});

	return <div className="square-container"> {squares} </div>;
};

export default Square;
