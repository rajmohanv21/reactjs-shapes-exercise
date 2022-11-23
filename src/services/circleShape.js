import { range } from '@laufire/utils/collection';

const generateCircleShapes = ({
	config: { circlePoints, circleInitialXAxis, circleInitialYAxis },
	state: { circleRadius },
}) => {
	let angle = 0;

	const slice = 2 * Math.PI / circlePoints;

	return range(0, circlePoints).map((circlePoint, index) => {
		angle += slice;
		const x = circleInitialXAxis + circleRadius * Math.cos(angle);
		const y = circleInitialYAxis + circleRadius * Math.sin(angle);

		return { x, y };
	});
};

const getCircleShapePosition = (context) => {
	const circles = generateCircleShapes(context);

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

const circleService = {
	getCircleShapePosition,
	generateCircleShapes,
};

export default circleService;
