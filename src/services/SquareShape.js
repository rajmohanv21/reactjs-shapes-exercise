import { range } from '@laufire/utils/collection.js';

const getSquareShapePosition = ({
	state: { spaceBetweenSquares },
	config: { squareSize },
	data: {	xAxis,	yAxis },
}) => ({
	left: `${ (squareSize + spaceBetweenSquares) * xAxis }px`,
	top: `${ (squareSize + spaceBetweenSquares) * yAxis }px`,
});

const generateSquareShapes = (context) => {
	const { config: { squareCount, initialAxis }} = context;

	let xAxis = initialAxis;
	let yAxis = initialAxis;

	const resetAxisValue = () => {
		xAxis = initialAxis;
		yAxis++;
	};

	return range(0, squareCount).map((index) => {
		const squareShape = {
			id: index,
			style: getSquareShapePosition({
				...{ ...context, data: { xAxis, yAxis }},
			}),
		};

		Math.sqrt(squareCount) === xAxis ? resetAxisValue() : xAxis++;

		return squareShape;
	});
};

const squareService = {
	getSquareShapePosition,
	generateSquareShapes,
};

export default squareService;
