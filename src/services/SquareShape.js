import { range } from '@laufire/utils/collection.js';

const getSquareShapePosition = ({
	state: { spaceBetweenShapes },
	config: { squareSize },
	data: {	xAxis,	yAxis },
}) => ({
	left: `${ (squareSize + spaceBetweenShapes) * xAxis }px`,
	top: `${ (squareSize + spaceBetweenShapes) * yAxis }px`,
});

const generateSquareShapes = (context) => {
	const { config: { squareCount, initialXAxis, initialYAxis }} = context;

	let xAxis = initialXAxis;
	let yAxis = initialYAxis;

	const resetAxisValue = () => {
		xAxis = initialXAxis;
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
