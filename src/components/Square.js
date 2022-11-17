import React from 'react';
import { range } from '@laufire/utils/collection.js';
import squareService from '../services/SquareShape';

const Square = (context) => {
	const { config: { squareCount, initialAxis }} = context;

	let xAxis = initialAxis;
	let yAxis = initialAxis;

	const resetAxisValue = () => {
		xAxis = initialAxis;
		yAxis++;
	};

	return range(0, squareCount).map((value, key) => {
		const squareShape = {
			className: 'square',
			style: squareService.getSquareShapePosition({
				...{ ...context, data: { xAxis, yAxis }},
			}),
		};

		Math.sqrt(squareCount) === xAxis ? resetAxisValue() : xAxis++;

		return <div key={ key } { ...squareShape }/>;
	});
};

export default Square;
