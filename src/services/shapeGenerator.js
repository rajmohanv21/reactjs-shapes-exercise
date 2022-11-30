import { range } from '@laufire/utils/collection.js';

const getSquaresPosition = ({
	state: { spaceBetweenShapes },
	config: { squareSize },
	data: {	xAxis,	yAxis },
}) => ({
	left: `${ (squareSize + spaceBetweenShapes) * xAxis }px`,
	top: `${ (squareSize + spaceBetweenShapes) * yAxis }px`,
});

const generateSquares = (context) => {
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
			style: getSquaresPosition({
				...{ ...context, data: { xAxis, yAxis }},
			}),
		};

		Math.sqrt(squareCount) === xAxis ? resetAxisValue() : xAxis++;

		return squareShape;
	});
};

const getCirclesPosition = ({
	config: { circlePoints, initialXAxis, initialYAxis },
	state: { spaceBetweenShapes },
}) => {
	let angle = 0;
	const semiCircleCount = 2;
	const slice = semiCircleCount * Math.PI / circlePoints;

	return range(0, circlePoints).map((circlePoint, index) => {
		angle += slice;
		const x = initialXAxis * spaceBetweenShapes * Math.cos(angle);
		const y = initialYAxis * spaceBetweenShapes * Math.sin(angle);

		return { x, y };
	});
};

const generateCircles = (context) => {
	const circles = getCirclesPosition(context);

	return circles.map(({ x, y }, index) => {
		const circleShape = {
			id: index,
			style: {
				left: `${ x }px`,
				top: `${ y }px`,
			},
		};

		return circleShape;
	});
};

const generateShapes = {
	generateSquares,
	generateCircles,
};

export default generateShapes;
